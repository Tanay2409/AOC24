function run(memory) {
    let detectMult = /mul\((\d+),(\d+)\)/gi;
    let detectControl = /(?:do|don't)\(\)/gi;

    let controlArr = [...memory.matchAll(detectControl)];
    let multArr = [...memory.matchAll(detectMult)];

    let enableMult = true;
    let sum = 0;
    let controlIndex = 0;
    for (let i = 0; i < multArr.length; i++) {
        // Check if there are control instructions before this `mul`
        while (controlIndex < controlArr.length && controlArr[controlIndex].index < multArr[i].index) {
            const control = controlArr[controlIndex][0];
            enableMult = control === "do()";
            controlIndex++;
        }

        // Process the `mul` if enabled
        if (enableMult) {
            let numbers = multArr[i][0].match(/\d+/g);
            sum += multiply(Number(numbers[0]), Number(numbers[1]));
        }
    }
}

function multiply(a, b) {
    return a * b;
}

// Example Usage
module.exports = { run };
