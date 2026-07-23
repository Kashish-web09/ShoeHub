import mongoose from "mongoose";

export const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        brand: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        desc: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true,
            min: 1
        },

        stock: {
            type: Number,
            required: true,
            min: 0
        },

        images: {
            type: [String],
            default: []
        },

        thumbnail: {
            type: String,
            required: true
        },

        color: {
            type: [String],
            required: true        },

        size: {
            type: [String],
            required: true
        },
ratings: [
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        }
    }
],
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },

        isBestSeller: {
            type: Boolean,
            default: false
        },

        sellerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Seller",
            required: true
        }
    },
    {
        timestamps: true,
        collection:'product'
    }
);