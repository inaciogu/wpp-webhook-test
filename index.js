const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/test', (req, res) => {
  console.log(req.body)
})

app.listen(3000, () => {
  console.log('server started')
})