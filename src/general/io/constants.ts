import { Integer } from "../math"
import { IO } from "./types"

const FORMATATIONAL_PRECISION = 3 as Integer

const ANY_MONZO_CHARS = /.*[\[|>\]⟩].*/

const SUPERSCRIPT_NUMS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"]

const NEWLINE = "\n" as IO

export {
    FORMATATIONAL_PRECISION,
    ANY_MONZO_CHARS,
    SUPERSCRIPT_NUMS,
    NEWLINE,
}
