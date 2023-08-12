require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("We are live and running");
});

mongoose.connect(process.env.DATABAZE_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log("The project is live on port 3000");
    });
  })
  .catch((error) => {
    throw new Error(error);
  })


