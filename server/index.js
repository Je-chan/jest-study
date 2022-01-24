require('dotenv').config();

// 필요한 모듈 다운
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.HTTP_PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:8080'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.get('/user-name', (req, res) => {
  if (req.params) console.log(req.params);
  res.send('liebe');
});

app.listen(port, () => {
  console.log(`          server listening on ${port}`);
});
