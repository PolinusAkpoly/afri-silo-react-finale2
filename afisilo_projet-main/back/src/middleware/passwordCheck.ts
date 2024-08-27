import { Request, Response, NextFunction } from 'express';
import zxcvbn from 'zxcvbn';
import { sendErrorResponse } from '../helpers/responseHelper';

export const checkPasswordStrength = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) {
        return sendErrorResponse(res, 400, 'Password is required');
    }

    const result = zxcvbn(password);

    // Vous pouvez ajuster le score minimum requis ici
    const minimumScore = 4;

    if (result.score < minimumScore) {
        return sendErrorResponse(res, 400, 'Password is too weak');
    }

    next();
};
