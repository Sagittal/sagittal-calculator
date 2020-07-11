import * as fs from "fs"

const updateFile = (file: string, output: string) => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync("dist/analyzeBounds") || fs.mkdirSync("dist/analyzeBounds")
    fs.existsSync(file) && fs.unlinkSync(file)
    fs.appendFileSync(file, output)
}

export {
    updateFile,
}
