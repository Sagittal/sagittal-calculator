const fs = require("fs")

const updateFile = (file, output) => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync("dist/analyzeBounds") || fs.mkdirSync("dist/analyzeBounds")
    fs.existsSync(file) && fs.unlinkSync(file)
    fs.appendFileSync(file, output)
}

module.exports = {
    updateFile,
}
