import mongoose from "mongoose"

// This function will use our connection string to connect to the database
// Process code 0 means success, code 1 means exit with failure
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};