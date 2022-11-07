console.log('Enter the text...');
const fs = require('fs');
const path = require('path');
const process = require('process');

const writableStreamSrc = path.join(__dirname, 'text.txt');
const writableStream = fs.createWriteStream(writableStreamSrc);

function sayGoodbye () {
  console.log('\ngoodbye!');
  process.exit();
}

process.stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') return sayGoodbye();
});

process.on('SIGINT', () => { 
  sayGoodbye();
});

process.stdin.pipe(writableStream);