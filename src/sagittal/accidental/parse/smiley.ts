import {BLANK} from "@sagittal/general"
import {Accidental} from "../flavor"
import {Ascii, Smiley} from "../glyph"
import {parseAscii} from "./ascii"

const parseSmiley = (smiley: Smiley): Accidental =>
    parseAscii(smiley.replace(/:/g, BLANK).replace(/ /g, BLANK) as Ascii)

export {
    parseSmiley,
}
