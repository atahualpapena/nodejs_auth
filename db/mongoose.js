const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {
    if (err) throw err;
    console.log("connected to db");
  }
);
