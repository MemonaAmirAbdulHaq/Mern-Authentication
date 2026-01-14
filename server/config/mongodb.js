import mongoose from "mongoose";

const connectDB = async () => {

   mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.error("MongoDB Error:", err.message);
    process.exit(1);
  });

    
    
};

export default connectDB;