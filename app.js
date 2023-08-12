const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json('We are live and running');
})

app.listen(3000, () => {
  console.log('The project is live on port 3000');
})
