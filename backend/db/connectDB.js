import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Mongo URL:", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.log("Error to connect with DB", error.message);
    process.exit(1);
  }
};
