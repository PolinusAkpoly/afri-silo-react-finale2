/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 22:10:16
 */


import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for Contact
export interface IContact extends Document {
	firstname : string,
	siteName : string,
	destinataire : string,
	lastname : string,
	email : string,
	subject : string,
	country : string,
	message : string,
	position : Number,
	updatedAt : Date,
	createdAt : Date,
}

const ContactSchema = new Schema({
	firstname : { type : String},
	siteName : { type : String},
	destinataire : { type : String},
	lastname : { type : String},
	email : { type : String},
	subject : { type : String},
	country : { type : String},
	message : { type : String},
	position : { type: Number },
	updatedAt : { type: Date },
	createdAt : {type: Date, default: Date.now },
});

// Create and export Contact model
const Contact: Model<IContact> = mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
