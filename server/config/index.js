const dotenv = require('dotenv');

// 載入全域變數
dotenv.config();

// LINE SDK 的參數
module.exports = {
  channelId: process.env.CHANNEL_ID,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};