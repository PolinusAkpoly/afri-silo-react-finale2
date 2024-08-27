import { Schema, model, Document } from 'mongoose';
import Profile from './Profile';

// Define roles and tags as const arrays
const roles = ['ROLE_USER', 'ROLE_BOURSIER', 'ROLE_TEACHER', 'ROLE_ADMIN', 'ROLE_BUSINESS'] as const;

const tags = ['client', 'free', 'starter', 'basic', 'premium', 'business'] as const;

export interface IUser extends Document {
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
  roles: typeof roles[number][];
  tags: typeof tags[number][];
  profile?: Schema.Types.ObjectId;
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

const userSchema = new Schema<IUser>({
  firstname: { type: String, trim: true },
  fullName: { type: String, trim: true },
  lastname: { type: String, trim: true },
  reviveCount: { type: Number, default: 0 },
  username: { type: String, trim: true, unique: true, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  civility: { type: String },
  dateBirth: { type: String },
  phone: { type: String },
  cityBirth: { type: String },
  countryBirth: { type: String },
  cityLive: { type: String },
  countryLive: { type: String },
  password: { type: String, trim: true, required: true },
  roles: [{ type: String, enum: roles, default: roles[0] }],
  tags: [{ type: String, enum: tags, default: tags[0] }],
  profile: { type: Schema.Types.ObjectId, ref: Profile },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: String },
  verifyAccountToken: { type: String },
  verifyAccountExpires: { type: String },
  lastConnected: { type: Date },
  online: { type: Boolean, default: false },
  twoFactorActivated: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  receivePromoMessage: { type: Boolean, default: false },
  networkInformation: { type: Object, default: { status: null } },
  updatedAt: { type: Date },
  createdAt: { type: Date, default: new Date() },
});

const User = model<IUser>('User', userSchema);

export default User;
