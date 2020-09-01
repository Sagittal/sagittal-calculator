import { Maybe } from "../code"
import { Count } from "../types"
import { LogTargets } from "./log"



type HexColor = string & { _HexColorBrand: "HexColor" }
type Filename = string & { _FileBrand: "File" }

type Char = string & { _CharBrand: "Char" }

type Io = string & { _IOBrand: "IO" }
type Formatted<T> = Io & { _FormattedBrand: T }




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

// TODO: no good place to put this, but tslint is deprecated now; use typescript-eslint
//  https://github.com/typescript-eslint/typescript-eslint
//  https://github.com/typescript-eslint/tslint-to-eslint-config
//  note that you'll have to rewrite your custom rules. this might help:
//  https://timdeschryver.dev/blog/migrating-a-tslint-rule-to-eslint-with-typescript-eslint

interface IoSettings {
    noWrite: boolean,
    forForum: boolean,
    logTargets: LogTargets
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
