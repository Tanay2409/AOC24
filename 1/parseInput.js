const fsp = require('fs').promises;
const filePath = '../inputs/1-input.txt';
const file1a = require('./1a');
const file1b = require('./1b');
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
    await file1a.run(listA, listB)
    await file1b.run(listA, listB)
}