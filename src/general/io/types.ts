import { Maybe } from "../code"
import { Ms } from "../types"
import { LogTargets } from "./log"

type HexColor = string & { _HexColorBrand: "HexColor" }
type Filename = string & { _FileBrand: "File" }

type Char = string & { _CharBrand: "Char" }

type Io = string & { _IOBrand: "IO" }

type ColorMethod =
    "white" |
    "gray" |
    "black" |
    "red" |
    "yellow" |
    "green" |
    "cyan" |
    "blue" |
    "magenta"

interface IoSettings {
    noWrite: boolean,
    forForum: boolean,
    logTargets: LogTargets,
    disableColors: boolean,
    scriptGroup: Filename,
    time: Maybe<Ms>,
}

export {
    ColorMethod,
    HexColor,
    Filename,
    Io,
    Char,
    IoSettings,
}
