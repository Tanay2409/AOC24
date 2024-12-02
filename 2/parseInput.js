const fs = require('fs');
const filePath = '../inputs/2-input.txt';
const file2a = require('./2a.js');
const file2b = require('./2b.js');
inputParser()
function inputParser() {
    let safeReports = 0
    const input = fs.readFileSync(filePath, 'utf-8');
    let rows = input.trim().split('\n');
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i]
        let ans = file2a.run(row.trim().split(/\s+/))
        // let ans = file2b.run(row.trim().split(/\s+/))
        if (ans) {
            safeReports = safeReports + 1
        }
    }
    console.log("🚀 ~ file: parseInput.js:8 ~ safeReports:", safeReports)
}