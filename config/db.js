const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://prachigoel1103:lJtCOOrSTLPynrgt@cluster0.pj6km8v.mongodb.net/Blog?retryWrites=true&w=majority');
    console.log(
      `Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
