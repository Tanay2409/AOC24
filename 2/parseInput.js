const fsp = require('fs').promises;
const filePath = '../inputs/2-input.txt';
const file2a = require('./2a');
const file2b = require('./2b');
inputParser()
async function inputParser() {
    let listA = []
    let listB = []
    const input = await fsp.readFile(filePath, 'utf-8');
    const rows = input.trim().split('\n');
    rows.forEach(row => {
        const [left, right] = row.trim().split(/\s+/);
        listA.push(Number(left));
        listB.push(Number(right));
    });
    await file2a.run(listA, listB)
    await file2b.run(listA, listB)
}