import * as fs from "fs"
import { NEWLINE } from "./constants"
import { Filename, Io } from "./types"

const readLines = (filename: Filename): Io[] =>
    fs.readFileSync(filename, { encoding: "utf8" }).split(NEWLINE) as Io[]

export {
    readLines,
}
