// import 'dotenv/config';
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
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
