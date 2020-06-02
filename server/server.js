const line = require('@line/bot-sdk');
const express = require('express');
const eventHandler = require('./handlers/eventHandler');
const config = require('./config');

// 建立 express app
const app = express();

// 註冊一個 webhook handler
app.post('/', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(eventHandler))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// 監聽的 PORT
const port = process.env.PORT || 80;

// 開始監聽
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});