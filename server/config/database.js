import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL,{dbName:"local"})
        console.log("Database is connected ");
        
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

export default connectDB;