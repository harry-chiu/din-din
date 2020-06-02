const line = require('@line/bot-sdk');
const config = require('../config');
const commandHandler = require('./commandHandler');

// 建立 LINE SDK 的 Client
const client = new line.Client(config);

// 事件 handler
function eventHandler(event) {
  // 如果事件的類型不是 message 或 text 就不做回應
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const userId = event.source.userId;
  const groupId = event.source.groupId;
  const roomId = event.source.roomId;
  const requestText = event.message.text;
  const splitedText = requestText.split(' ');
  const command = splitedText.slice(0, 1).join('');
  const value = splitedText.slice(1).join('');
  const response = commandHandler({
    userId,
    groupId,
    roomId,
    command,
    value,
  });

  if (!response) {
    return Promise.resolve(null);
  }

  return client.replyMessage(event.replyToken, response);
}

module.exports = eventHandler;