const fs = require("fs")
const {OUTPUT} = require("./constants")

const resetFile = () => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync("dist/boundsAnalysis") || fs.mkdirSync("dist/boundsAnalysis")
    fs.existsSync(OUTPUT) && fs.unlinkSync(OUTPUT)
}

module.exports = {
    resetFile,
}
