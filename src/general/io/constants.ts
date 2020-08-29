import { Integer } from "../math"
import { Char, IO } from "./types"

const IO_PRECISION = 3 as Integer

const ANY_MONZO_CHARS = /.*[\[|>\]⟩].*/

const SUPERSCRIPT_NUMS: Char[] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"] as Char[]

const NEWLINE = "\n" as IO & Char
const SPACE = " " as IO & Char
const BLANK = "" as IO

export {
    IO_PRECISION,
    ANY_MONZO_CHARS,
    SUPERSCRIPT_NUMS,
    NEWLINE,
    SPACE,
    BLANK,
}
