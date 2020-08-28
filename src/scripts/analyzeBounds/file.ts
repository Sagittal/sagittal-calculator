import * as fs from "fs"
import { Filename, IO } from "../../general"

const updateFile = (file: Filename, output: IO) => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync("dist/analyzeBounds") || fs.mkdirSync("dist/analyzeBounds")
    fs.existsSync(file) && fs.unlinkSync(file)
    fs.appendFileSync(file, output)
}

export {
    updateFile,
}
