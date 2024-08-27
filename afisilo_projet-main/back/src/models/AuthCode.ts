import { Schema, model, Document } from 'mongoose';

// Interface représentant les attributs d'un code de vérification
export interface IAuthCode extends Document {
    userId: string; // ID de l'utilisateur associé au code de vérification
    code: string; // Le code de vérification lui-même
    createdAt: Date; // Date de création du code de vérification
    expiresAt: Date; // Date d'expiration du code de vérification
}

// Schéma MongoDB pour les codes de vérification
const VerificationCodeSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    code: { type: String, required: true },
    partialToken: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true, expires: '5m' } // Supprimera automatiquement les documents expirés après 5 minutes
});

// Créer et exporter le modèle de code de vérification
const AuthCode = model<IAuthCode>('AuthCode', VerificationCodeSchema);

export default AuthCode;
