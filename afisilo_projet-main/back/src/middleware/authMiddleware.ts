import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { sendErrorResponse } from '../helpers/responseHelper';

interface AuthRequest extends Request {
    userId?: string; // Add userId property to Request interface
    user?: typeof User;
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return sendErrorResponse(res, 401, 'Unauthorized: No token provided');
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as { userId: string }; // Verify token
        req.userId = decoded.userId; // Attach user ID to request object
        next(); // Pass control to the next middleware
    } catch (error) {
        return sendErrorResponse(res, 403, 'Unauthorized: Invalid token');
    }
};

export const checkRole = (allowedRoles: string[]) => {
    return async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const user = await User.findById(req.userId); // Assuming your User model has a findById method
            if (!user) {
                return sendErrorResponse(res, 404, 'Forbidden: Check role fail, because User not found');
            }

            // Check if any of the user's roles match any of the allowedRoles
            const userRoles = user.roles || ["ROLE_USER"]; 
            const isAuthorized = userRoles.some(role => allowedRoles.includes(role));

            if (!isAuthorized) {
                return sendErrorResponse(res, 403, 'Forbidden: Insufficient permissions');
            }

            //req.user = user; // Attach user object to request
            next(); // Pass control to the next middleware if authorized
        } catch (error) {
            return sendErrorResponse(res, 500, 'Internal Server Error');
        }
    };
};