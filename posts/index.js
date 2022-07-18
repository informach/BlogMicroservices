const express = require('express');
const { randomBytes } = require('crypto');

const app = express();

const posts = {};

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (res, req) => {
  const id = randomBytes(4).toString('hex');
  
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});