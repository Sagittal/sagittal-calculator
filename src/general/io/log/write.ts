import * as fs from "fs"
import { NEWLINE } from "../constants"
import { removeColor } from "../removeColor"
import { Filename, Io } from "../types"
import { LogTarget } from "./types"

const write = (message: Io, target: LogTarget, scriptGroup: Filename, fileExtensionProvided: boolean): void => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync(`dist/${scriptGroup}`) || fs.mkdirSync(`dist/${scriptGroup}`)
    fs.appendFileSync(
        `dist/${scriptGroup}/${target}${fileExtensionProvided ? "" : ".txt"}`,
        `${removeColor(message)}` + NEWLINE,
    )
}

export {
    write,
}
