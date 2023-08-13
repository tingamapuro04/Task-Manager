require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDb = require('./database');
const router = require('./Routes/taskRoute');
const notFound = require("./middleware/404");

const app = express();
app.use(express.json());
app.use('/api/v1/tasks', router);
app.use(notFound)


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
