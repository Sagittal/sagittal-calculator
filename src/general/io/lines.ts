import * as fs from "fs"
import {NEWLINE} from "./constants"
import {Filename, Io} from "./types"

const readLines = (filename: Filename): Io[] => {
    const lines = fs.readFileSync(filename, {encoding: "utf8"}).split(NEWLINE) as Io[]
    lines.pop()

    return lines
}

export {
    readLines,
}
