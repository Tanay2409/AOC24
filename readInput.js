require('dotenv').config();
const fsp = require('fs').promises;
const sessionToken = process.env.ADVENT_SESSION;

async function getInput() {
    try {
        const pstDay = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', day: 'numeric' }).format(new Date());
        let data = await fetch(`https://adventofcode.com/2024/day/${pstDay}/input`, {
            headers: {
                'Cookie': `session=${sessionToken}`
            }
        })
        if (data.ok) {
            await fsp.writeFile(`./inputs/${pstDay}-input.txt`, await data.text())
        }
    } catch (error) {
        console.log("🚀 ~ getInput ~ error:", error)
    }
}
getInput()