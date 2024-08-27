import mongoose, { Schema, Document, Model } from 'mongoose';

interface IProfile extends Document {
    bio?: string;
    website?: string;
    avatar?: string;
    user: mongoose.Schema.Types.ObjectId;
    social?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const ProfileSchema: Schema = new Schema(
    {
        bio: { type: String, trim: true },
        website: { type: String, trim: true },
        avatar: { type: String, trim: true },
        user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
        social: {
            facebook: { type: String, trim: true },
            twitter: { type: String, trim: true },
            linkedin: { type: String, trim: true },
            instagram: { type: String, trim: true }
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    {
        timestamps: true
    }
);


// Create and export Profile model
const Profile: Model<IProfile> = mongoose.model<IProfile>('profile', ProfileSchema);

export default Profile;