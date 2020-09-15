import * as fs from "fs"
import { Filename, Io } from "./types"

const readLines = (filename: Filename): Io[] =>
    fs.readFileSync(filename, { encoding: "utf8" }).split("\n") as Io[]

export {
    readLines,
}
