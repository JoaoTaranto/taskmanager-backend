const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.uwcnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect MongoDB!");
        console.log(error)
    }
};

module.exports = connectDatabase;
