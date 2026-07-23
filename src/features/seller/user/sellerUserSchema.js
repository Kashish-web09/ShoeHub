import mongoose from "mongoose";

export const sellerUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
    role: { type: String, default: "seller" },
    storeName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: {
      type: String,
      required: true,
      match: /^[1-9][0-9]{5}$/
    },
    gstNumber: { type: String },
    profileImage: { type: String },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
    businessType: { type: String }
  },
  {
    timestamps: true,
    collection: "sellerAcc"
  }
);