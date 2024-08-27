// src/controllers/AuthController.ts
import { Controller, Post, Body, Req, Res, UseBefore } from 'routing-controllers';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { sendSuccessResponse, sendErrorResponse } from '../helpers/responseHelper';
import { checkPasswordStrength } from '../middleware/passwordCheck';
import { validateEmailFormat } from '../middleware/validateEmailFormat';
import { validateMXRecord } from '../middleware/validateMXRecord';
import { generateRandomCode, randomToken } from '../helpers/codeGenerator';
import AuthCode from '../models/AuthCode';
import { sendEmail } from '../helpers/emailHelper';

interface RegisterBody {
    email: string;
    username: string;
    password: string;
    fullName: string;
}

@Controller('/api/auth')
export class AuthController {

    @Post('/register')
    @UseBefore(checkPasswordStrength, validateEmailFormat, validateMXRecord)
    async register(@Body() body: RegisterBody, @Res() res: Response) {
        try {
            const { email, username, password, fullName } = body;

            // Validation basique des entrées
            if (!email || !username || !password || !fullName) {
                return sendErrorResponse(res, 400, 'All fields are required');
            }

            // Vérification de l'existence de l'utilisateur par email
            let existingUser = await User.findOne({ email });
            if (existingUser) {
                return sendErrorResponse(res, 400, 'Email already in use');
            }

            // Vérification de l'existence de l'utilisateur par nom d'utilisateur
            existingUser = await User.findOne({ username });
            if (existingUser) {
                return sendErrorResponse(res, 400, 'Username already in use');
            }

            // Hachage du mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);

            // Création du nouvel utilisateur
            const user = new User({ email, password: hashedPassword, fullName, username });
            await user.save();

            // Réponse en cas de succès
            return sendSuccessResponse(res, 201, { message: 'User registered successfully' });
        } catch (error: any) {
            // Réponse en cas d'erreur serveur
            return sendErrorResponse(res, 500, error.message);
        }
    }

    @Post('/login')
    async login(@Body() body: any, @Res() res: Response) {
        try {
            const { email, password } = body;
            const user = await User.findOne({ email });

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return sendErrorResponse(res, 400, 'Invalid email or password');
            }

            if (user.twoFactorActivated) {
                // Générer un code de 8 chiffres
                const generatedCode = generateRandomCode(8);
                const partialToken = randomToken(64);

                // Supprimer tous les codes de vérification existants pour cet utilisateur
                await AuthCode.deleteMany({ userId: user._id });

                // Créer un nouveau code de vérification
                const verificationCode = new AuthCode({
                    userId: user._id,
                    code: generatedCode,
                    partialToken: partialToken,
                    createdAt: new Date(),
                    expiresAt: new Date(Date.now() + 5 * 60 * 1000) // Expire dans 5 minutes
                });

                // Enregistrer le code de vérification dans la base de données
                await verificationCode.save();

                const message = `
                <h1>Code de vérification</h1>
                <p>Bonjour ${user.fullName}</p>
                <p>Votre nouveau code de vérification est : <strong>${verificationCode.code}</strong></p>
                <p>Ce code expirera dans 5 minutes.</p>
            `;

                sendEmail(user.email, 'Code de vérification', message)

                // Envoyer une réponse avec le jeton partiel et l'ID de l'utilisateur
                return sendSuccessResponse(res, 200, { partialToken, userId: user._id });
            }

            // Si la double authentification n'est pas activée, générer un jeton JWT normal
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || '', { expiresIn: process.env.TOKEN_EXPIRE });

            // Envoyer une réponse avec le jeton JWT et l'ID de l'utilisateur
            return sendSuccessResponse(res, 200, { token, userId: user._id });
        } catch (error: any) {
            // En cas d'erreur, renvoyer une réponse d'erreur
            return sendErrorResponse(res, 500, error.message);
        }
    }

    @Post('/reset-password')
    async resetPassword(@Body() body: any, @Res() res: Response) {
        try {
            const { email, newPassword } = body;
            const user = await User.findOne({ email });

            if (!user) {
                return sendErrorResponse(res, 404, 'User not found');
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
            await user.save();

            return sendSuccessResponse(res, 200, { message: 'Password reset successfully' });
        } catch (error: any) {
            return sendErrorResponse(res, 500, error.message);
        }
    }

    @Post('/verify-email')
    async verifyEmail(@Body() body: any, @Res() res: Response) {
        try {
            const { email, code } = body;
            const user = await User.findOne({ email });

            let verificationCode = "" // A définir

            if (!user || verificationCode !== code) {
                return sendErrorResponse(res, 400, 'Invalid code');
            }

            user.isVerified = true;
            await user.save();

            return sendSuccessResponse(res, 200, { message: 'Email verified successfully' });
        } catch (error: any) {
            return sendErrorResponse(res, 500, error.message);
        }
    }

    @Post('/verify-code')
    async verifyCode(body: any, res: Response) {
        try {
            const { userId, partialToken, code } = body;
            const user = await User.findOne({ _id: userId });

            if (!user) {
                return sendErrorResponse(res, 400, 'Invalid user ID');
            }

            const verificationCode = await AuthCode.findOne({ userId, partialToken, code });

            if (!verificationCode) {
                return sendErrorResponse(res, 400, 'Invalid code');
            }

            return sendSuccessResponse(res, 200, { message: 'Code verified successfully' });
        } catch (error: any) {
            return sendErrorResponse(res, 500, error.message);
        }
    };

    @Post('/resend-verify-code')
    async resendVerifyCode(@Body() body: any, @Res() res: Response) {
        try {
            const { userId, partialToken } = body;
            const user = await User.findOne({ _id: userId });

            if (!user) {
                return sendErrorResponse(res, 404, 'User not found');
            }

            const verificationCode = await AuthCode.findOne({ userId, partialToken });

            if (!verificationCode) {
                return sendErrorResponse(res, 404, 'partialToken not valid');
            }

            const message = `
                <h1>Code de vérification</h1>
                <p>Bonjour ${user.fullName}</p>
                <p>Votre nouveau code de vérification est : <strong>${verificationCode.code}</strong></p>
                <p>Ce code expirera dans 5 minutes.</p>
            `;

            sendEmail(user.email, 'Code de vérification', message)

            // Here, you should send the code to the user's email

            return sendSuccessResponse(res, 200, { message: 'Verification code resent successfully' });
        } catch (error: any) {
            return sendErrorResponse(res, 500, error.message);
        }
    }
}
