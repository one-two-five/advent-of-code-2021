const fs = require('fs');
const path = require('path');

const arrayFromTxtNewLines = (file, castToNumbers = false) => {
  let txtArray;  
  
  if(!file) {
    return []
  }

  const root = process.cwd();
  const filePath = path.join(root, file);

  try {
    txtArray = fs.readFileSync(filePath).toString().split("\n");
  } catch (error) {
    console.error('file does not exist')
    txtArray = []
  }

  return castToNumbers ? txtArray.map(Number) : txtArray;
}

module.exports = arrayFromTxtNewLines;