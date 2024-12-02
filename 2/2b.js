function run(a) {
    let listA = a;
    if (validate(listA)) {
        return true
    } else {
        for (let k = 0; k < listA.length; k++) {
            let modArray = listA.slice(0, k).concat(listA.slice(k + 1))
            if (validate(modArray)) {
                return true
            }
        }
    }
    return false
}

function validate(data) {
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