import { Request, Response, NextFunction } from 'express';
import { sendErrorResponse } from '../helpers/responseHelper';

const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateEmailFormat = (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    if (!email || !isValidEmailFormat(email)) {
        return sendErrorResponse(res, 400, 'Invalid email format');
    }
    next();
};
