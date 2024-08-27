
export interface User {
    firstname?: string;
    fullName?: string;
    lastname?: string;
    reviveCount?: number;
    username?: string;
    email: string;
    civility?: string;
    dateBirth?: string;
    phone?: string;
    cityBirth?: string;
    countryBirth?: string;
    cityLive?: string;
    countryLive?: string;
    password: string;
    roles: any[];
    tags: any[];
    profile?: any;
    resetPasswordToken?: string;
    resetPasswordExpires?: string;
    verifyAccountToken?: string;
    verifyAccountExpires?: string;
    lastConnected?: Date;
    online?: boolean;
    twoFactorActivated?: boolean;
    isVerified?: boolean;
    receivePromoMessage?: boolean;
    networkInformation?: { status: any };
    updatedAt?: Date;
    createdAt?: Date;
}