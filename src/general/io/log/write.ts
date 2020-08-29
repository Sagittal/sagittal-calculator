import * as fs from "fs"
import { removeColor } from "../removeColor"
import { Filename, IO } from "../types"
import { LogTarget } from "./types"

const write = (message: IO, target: LogTarget, scriptGroup: Filename, fileExtensionProvided: boolean) => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync(`dist/${scriptGroup}`) || fs.mkdirSync(`dist/${scriptGroup}`)
    fs.appendFileSync(
        `dist/${scriptGroup}/${target}${fileExtensionProvided ? "" : ".txt"}`,
        `${removeColor(message)}\n`,
    )
}

export {
    write,
}
