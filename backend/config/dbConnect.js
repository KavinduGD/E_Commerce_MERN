const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
