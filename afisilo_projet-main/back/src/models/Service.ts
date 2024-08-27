/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 21:59:17
 */


import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for Contact
export interface IService extends Document {
	name : String,
	desctiption : String,
	slug : String,
	content : String,
	position : Number,
	updatedAt : Date,
	createdAt : Date,
}

const ServiceSchema = new Schema({
	name : { type : String},
	desctiption : { type : String},
	slug : { type : String},
	content : { type : String},
	position : { type: Number },
	updatedAt : { type: Date },
	createdAt : {type: Date, default: Date.now },
});

// Create and export Contact model
const Service: Model<IService> = mongoose.model<IService>('Service', ServiceSchema);

export default Service;
