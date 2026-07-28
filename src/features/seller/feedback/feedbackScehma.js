import mongoose from "mongoose";
import { Schema } from "mongoose";

export const feedbackSchema=new mongoose.Schema({
      name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true
  },

  message: {
    type: String,
    required: true,
    trim: true
  },

  status: {
    type: String,
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending"
  },


  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
},
{
    collection:'feedback'
}
)