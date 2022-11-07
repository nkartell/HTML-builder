const fs = require('fs');
const path = require('path');
const getFilePath = path.join(__dirname, 'text.txt');
const text = fs.createReadStream(getFilePath, 'utf8');

text.on('data', function (chunk) {
  process.stdout.write(chunk);
});
