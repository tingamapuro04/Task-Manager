require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDb = require('./database');
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("We are live and running");
});

const {PORT, DATABAZE_URL} = process.env;



const connect = async (url) => {
  try {
    await connectDb(url)
    app.listen(PORT, () => {
      console.log('We are running')
    });
  } catch (error) {
    throw new Error(error);
  }
}

connect(DATABAZE_URL);
