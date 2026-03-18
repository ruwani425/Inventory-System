import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    console.log('Connecting to DB...') 
    await mongoose.connect(process.env.MONGO_URI!)
    console.log('Connected to MongoDB Atlas')
  } catch (error) {
    console.error('DB connection error:', error)
    process.exit(1)
  }
}