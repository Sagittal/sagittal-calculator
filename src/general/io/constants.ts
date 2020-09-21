import { Integer } from "../math"
import { LogTargets } from "./log"
import { Char, Io, IoSettings } from "./types"

const IO_PRECISION = 3 as Integer

const ANY_MONZO_CHARS = /[\[|>\]⟩]/
const IDENTIFYING_COMMA_NAME_CHARS = /[unskCSMLA]/

const SUPERSCRIPT_NUMS: Char[] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"] as Char[]

const NEWLINE = "\n" as Io
const SPACE = " " as Io
const BLANK = "" as Io
const TAB = "\t" as Io
const COMMA = "," as Io

const INITIAL_IO_SETTINGS: IoSettings = {
    noWrite: false,
    forForum: false,
    logTargets: {} as LogTargets,
    disableColors: false,
    // @ts-ignore
    scriptGroup: undefined,
}

export {
    IO_PRECISION,
    ANY_MONZO_CHARS,
    SUPERSCRIPT_NUMS,
    NEWLINE,
    SPACE,
    BLANK,
    TAB,
    COMMA,
    IDENTIFYING_COMMA_NAME_CHARS,
    INITIAL_IO_SETTINGS,
}
