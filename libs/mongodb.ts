import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const mongoDBUrl = process.env.MONGODB_URL;

  if (!mongoDBUrl) {
    throw new Error('Missing MongoDB connection URL');
  }

  try {
    await mongoose.connect(mongoDBUrl);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
