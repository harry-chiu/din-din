const fs = require('fs');
const path = require('path');
const { generateGroupId, duplicateGroupName } = require('../utils');

module.exports = (id, name) => {
  if (!name) {
    return {
      type: 'text',
      text: '團名不可為空白',
    };
  }

  const groupsFilePath = path.join(process.cwd(), '/server/database/groups.json');
  const groupId = generateGroupId(id);

  const data = fs.readFileSync(groupsFilePath, 'utf8');
  const previousGroups = data ? JSON.parse(data) : [];

  if (duplicateGroupName(previousGroups, name)) {
    return {
      type: 'text',
      text: `"${name}" 名稱重複`,
    };
  }

  const newGroups = JSON.stringify([...previousGroups, {
    id,
    name,
  }]);
  fs.writeFileSync(groupsFilePath, newGroups, 'utf8');

  return {
    type: 'text',
    text: `"${name}" 創建成功`,
  };
};