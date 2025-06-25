import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
        console.log('MongoDB connected');
        
    } catch (error) {
        console.log('MongoDB connection failed');
        process.exit(1);
        
    }
};

export default connectDB;