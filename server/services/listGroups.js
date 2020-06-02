const fs = require('fs');
const path = require('path');

module.exports = () => {
  const groupsFilePath = path.join(process.cwd(), '/server/database/groups.json');

  const data = fs.readFileSync(groupsFilePath, 'utf8');
  const groups = data ? JSON.parse(data) : [];

  if (!groups.length) {
    return {
      type: 'text',
      text: '目前沒有人開團',
    };
  }
  
  const header = '[ 現在有的團 ]\n'
  const responseText = header + groups.map(group => group.name).join('\n');

  return {
    type: 'text',
    text: responseText,
  };
};