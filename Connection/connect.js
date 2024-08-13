const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.CLUSTER_LINK, {     
    });
    console.log("Connected to MongoDB"); 
  } catch (err) {
    console.log("Failed to connect to Mongo_DB");
    process.exit();
  }
};

module.exports = connectDB;
