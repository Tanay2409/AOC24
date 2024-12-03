const fs = require('fs');
const filePath = '../inputs/3-input.txt';
const file3a = require('./3a.js');
const file3b = require('./3b.js');
inputParser()
function inputParser() {
    const input = fs.readFileSync(filePath, 'utf-8');
    // file3a.run(input.toString())
    file3b.run(input.toString())
}