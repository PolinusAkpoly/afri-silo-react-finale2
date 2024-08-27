/**
 * Generate with Mudey Formation (https://mudey.fr)
 * Created at : 25/05/2024 21:54:19
 */


import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for Contact
export interface IProduct extends Document {
	name : String,
	description : String,
	imageUrl : String,
	category : any,
	position : Number,
	updatedAt : Date,
	createdAt : Date,
}

const ProductSchema = new Schema({
	name : { type : String},
	description : { type : String},
	imageUrl : { type : String},
	category : { type : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Category'
	}},
	position : { type: Number },
	updatedAt : { type: Date },
	createdAt : {type: Date, default: Date.now },
});

// Create and export Contact model
const Product: Model<IProduct> = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
