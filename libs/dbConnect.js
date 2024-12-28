// database
import mongoose from "mongoose";

// r2iX3k8CLyTtwgEf
const connectDB = async () => {
  const MONGO_URI="mongodb+srv://hammadimran260:r2iX3k8CLyTtwgEf@cluster0.hmf6hmx.mongodb.net/ecommerce"
  try {
    if (mongoose.connection[0].readyState) {
      console.log("already Connected");
      return;
    }
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
