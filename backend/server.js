import mongoose from 'mongoose';                // Import mongoose to connect MongoDB

const connectDB = async () => {                 // Create async function to connect DB
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB'); // Connect to local MongoDB
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Show success message
  } catch (error) {
    console.error(`Error: ${error.message}`);   // Show error message if connection fails
    process.exit(1);                            // Exit process
  }
};

export default connectDB;                       // Export this function
