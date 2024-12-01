async function run(a, b) {
    let listA = a.sort()
    let listB = b.sort()
    let sum = 0
    for (let i = 0; i < listA.length; i++) {
        sum += Math.abs(listA[i] - listB[i])
    }
    console.log("🚀 ~ 1a ~ ans:", sum)
}
module.exports = { run };