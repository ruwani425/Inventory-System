import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name : {
        type: String,
        required: true,
    },

    quantity : {
        type: Number,
        required: true,
    },

    price : {
        type: Number,
        required: true
    }
    }, { timestamps: true })


export const Product = mongoose.model('product',productSchema)