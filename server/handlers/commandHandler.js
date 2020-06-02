const createGroup = require('../services/createGroup');
const listGroups = require('../services/listGroups');

module.exports = ({ userId, groupId, roomId, command, value }) => {
  console.log('userId: ', userId);
  console.log('groupId: ', groupId);
  console.log('roomId: ', roomId);
  console.log('command: ', command);
  console.log('value: ', value);
  switch (command) {
    case '/開團':
      const id = groupId || roomId;
      const name = value;
      return createGroup({
        id,
        name,
      });
    case '/看團':
      return listGroups();
    default:
      return null;
  }
};