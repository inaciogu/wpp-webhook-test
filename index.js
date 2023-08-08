const express = require('express');

const app = express();

app.use(express.json())

app.get('/test', (req, res) => {
  console.log(req.body)
})