import { LogTargets } from "./log"

type HexColor = string & { _HexColorBrand: "HexColor" }
type Filename = string & { _FileBrand: "File" }

type Char = string & { _CharBrand: "Char" }

type Io = string & { _IOBrand: "IO" }
type Formatted<T = unknown> = Io & { _FormattedBrand: T }

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
}

export {
    ColorMethod,
    HexColor,
    Formatted,
    Filename,
    Io,
    Char,
    IoSettings,
}
