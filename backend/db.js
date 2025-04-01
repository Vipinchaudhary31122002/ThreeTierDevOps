const mongoose = require("mongoose");

const dbName = "ToDo";

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN_STR, { dbName });
        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
      }
};
