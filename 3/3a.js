function run(memory) {
    let detectMult = /mul\((\d+),(\d+)\)/gi
    let multArr = [...memory.match(detectMult)]
    let sum = 0
    for (let i = 0; i < multArr.length; i++) {
        let numbers = multArr[i].match(/\d+/g)
        sum += multiply(Number(numbers[0]), Number(numbers[1]))
    }
    console.log("🚀 ~ file: 3a.js:8 ~ run ~ sum:", sum)
}
function multiply(a, b) {
    return a * b
}
module.exports = { run };