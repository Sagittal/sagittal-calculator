import { Precision } from "../code"
import { LogTargets } from "./log"
import { TableFormat } from "./table"
import { Char, Io, IoSettings } from "./types"

const IO_PRECISION = 3 as Precision

const ANY_MONZO_CHARS = /[\[|>\]⟩]/
const IDENTIFYING_COMMA_NAME_CHARS = /[unskCSMLA]/
const ANY_CENTS_CHARS = /[c¢]/
const ANY_QUOTIENT_CHARS = /[\/:]/
const ANY_DECIMAL_CHARS = /[.]/

const SUPERSCRIPT_NUMS: Char[] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"] as Char[]

const NEWLINE = "\n" as Io
const SPACE = " " as Io
const BLANK = "" as Io
const TAB = "\t" as Io
const COMMA = "," as Io

const INITIAL_IO_SETTINGS: IoSettings = {
    noWrite: false,
    tableFormat: TableFormat.TERMINAL,
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
    ANY_CENTS_CHARS,
    ANY_QUOTIENT_CHARS,
    INITIAL_IO_SETTINGS,
    ANY_DECIMAL_CHARS,
}
