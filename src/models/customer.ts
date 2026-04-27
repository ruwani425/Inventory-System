import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  phone: { type: String },
  address: { type: String },
  createdAt: { type: Date, default: Date.now }
})

export const Customer = mongoose.model('Customer', customerSchema)