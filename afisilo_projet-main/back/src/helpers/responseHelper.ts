// src/helpers/responseHelper.ts

import { Response } from 'express';
import { getRequestTime } from './time';

// Helper pour les réponses de succès
export const sendSuccessResponse = (res: Response, statusCode: number, data: any) => {
    if (res.headersSent) {
        // console.warn('Response already sent.');
        return;
    }
    return res.status(statusCode).json({
        isSuccess: true,
        statusCode,
        ...data,
        requestTime: getRequestTime(),
    });
};

// Helper pour les réponses d'erreur
export const sendErrorResponse = (res: Response, statusCode: number, message: string) => {
    if (res.headersSent) {
        // console.warn('Response already sent.');
        return;
    }
    return res.status(statusCode).json({
        isSuccess: false,
        statusCode,
        requestTime: getRequestTime(),
        message,
    });
};
