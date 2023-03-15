const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.db)
      console.log("database is connected");
    
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = connect;