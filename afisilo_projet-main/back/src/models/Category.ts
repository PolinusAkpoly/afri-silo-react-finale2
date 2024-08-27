/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 21:52:14
 */


import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for Contact
export interface ICategory extends Document {
	name : String,
	description : String,
	position : Number,
	updatedAt : Date,
	createdAt : Date,
}

const CategorySchema = new Schema({
	name : { type : String},
	description : { type : String},
	position : { type: Number },
	updatedAt : { type: Date },
	createdAt : {type: Date, default: Date.now },
});

// Create and export Contact model
const Category: Model<ICategory> = mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
