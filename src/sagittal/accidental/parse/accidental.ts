import {IDENTIFYING_ACCIDENTAL_CHARS, Io} from "@sagittal/general"
import {Accidental} from "../flavor"
import {Ascii, Smiley, Unicode} from "../glyph"
import {parseAscii} from "./ascii"
import {parseSmiley} from "./smiley"
import {parseUnicode} from "./unicode"

const parseAccidental = (accidentalIo: Io): Accidental => {
    if (accidentalIo.match(/[:]/)) {
        return parseSmiley(accidentalIo as Smiley)
    } else if (accidentalIo.match(IDENTIFYING_ACCIDENTAL_CHARS)) {
        return parseAscii(accidentalIo as Ascii)
    }

    return parseUnicode(accidentalIo as Unicode)
}

export {
    parseAccidental,
}
