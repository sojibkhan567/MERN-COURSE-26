import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectinInstance = await mongoose.connect(`${process.env.MONGODB_URI}${process.env.DB_NAME}`)
        console.log(`\nMongoDB connected!! DB Host: ${connectinInstance.connection.host}`)
    } catch (error) {
        console.log("Database connection failed!!", error);
        process.exit(1);
    }
}

export default connectDB