import { Integer } from "../math"
import { Char, Io } from "./types"

const IO_PRECISION = 3 as Integer

const ANY_MONZO_CHARS = /.*[\[|>\]⟩].*/

const SUPERSCRIPT_NUMS: Char[] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"] as Char[]

const NEWLINE = "\n" as Io & Char
const SPACE = " " as Io & Char
const BLANK = "" as Io
const TAB = "\t" as Io

export {
    IO_PRECISION,
    ANY_MONZO_CHARS,
    SUPERSCRIPT_NUMS,
    NEWLINE,
    SPACE,
    BLANK,
    TAB,
}
