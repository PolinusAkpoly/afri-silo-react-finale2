import { Request, Response, NextFunction } from 'express';
import dns from 'dns';
import { sendErrorResponse } from '../helpers/responseHelper';

const hasValidMXRecord = (email: string): Promise<boolean> => {
    const domain = email.split('@')[1];
    return new Promise((resolve, reject) => {
        dns.resolveMx(domain, (err, addresses) => {
            if (err) {
                return resolve(false);
            }
            return resolve(addresses && addresses.length > 0);
        });
    });
};

export const validateMXRecord = async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    if (!email) {
        return sendErrorResponse(res, 400, 'Email is required');
    }
    const domainIsValid = await hasValidMXRecord(email);
    if (!domainIsValid) {
        return sendErrorResponse(res, 400, 'Invalid email domain');
    }
    next();
};
