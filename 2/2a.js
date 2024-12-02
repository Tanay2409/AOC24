function run(a) {
    let data = a
    let order = ''
    if (Number(data[0]) > Number(data[1])) {
        order = 'dsc'
    } else if (Number(data[0]) < Number(data[1])) {
        order = 'asc'
    }
    for (let i = 0; i < data.length - 1; i++) {
        let diff = Number(data[i]) - Number(data[i + 1])
        if (Math.abs(diff) > 3 || Math.abs(diff) < 1) {
            return false
        }
        if (order == 'asc' && diff > 0) {
            return false
        }
        if (order == 'dsc' && diff < 0) {
            return false
        }
    }

    return true
}
module.exports = { run };