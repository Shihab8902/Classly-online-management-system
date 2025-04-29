const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL, { dbName: process.env.DB_NAME });
    console.log("Connection established with MongoDB database successfully.");
}


module.exports = connectDB;