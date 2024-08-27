import crypto from 'crypto';

export const generateRandomCode = (length: number): string => {
    const characters = '0123456789'; // Chiffres de 0 à 9
    let code = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
};



export const randomToken = (length: number): string => {
    // Générer un buffer cryptographiquement sécurisé
    const buffer = crypto.randomBytes(Math.ceil(length / 2));
    // Convertir le buffer en chaîne hexadécimale
    const token = buffer.toString('hex').slice(0, length);
    return token;
};
