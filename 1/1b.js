async function run(a, b) {
    let listA = a
    let listB = b
    let mappedlistB = new Map();
    let sum = 0;
    for (let i = 0; i < listB.length; i++) {
        mappedlistB.set(listB[i], mappedlistB.get(listB[i]) + 1 || 1);
    }
    for (let j = 0; j < listA.length; j++) {
        if (mappedlistB.has(listA[j])) {
            sum += listA[j] * mappedlistB.get(listA[j])
        }
    }
    console.log("🚀 ~ 1b ~ sum:", sum)
}
module.exports = { run };