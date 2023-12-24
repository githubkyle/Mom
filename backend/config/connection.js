import 'dotenv/config';
import mongoose from 'mongoose';

console.log(process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DATABASE CONNECTED SUCCESSFULLY`);
  } catch (error) {
    console.log(`DATABASE FAILED TO CONNECT ${error}`);
  }
};

export default connectDB;
