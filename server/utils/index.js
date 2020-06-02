const crypto = require('crypto');

exports.generateGroupId = userId => crypto.createHash('sha256').update(userId + new Date()).digest('base64');

exports.duplicateGroupName = (groups, groupName) => groups.map((group) => group.groupName).includes(groupName);