import {Formatted, ioSettings, TableFormat} from "@sagittal/general"
import {Accidental} from "../flavor"
import {alignAscii} from "./align"
import {computeAccidentalAscii} from "./ascii"
import {computeAccidentalSmiley} from "./smiley"
import {Ascii, Glyph, Smiley, Unicode} from "./types"
import {computeAccidentalUnicode} from "./unicode"

const formatAccidental = (accidental: Accidental, {align = true}: {align?: boolean} = {}): Formatted<Glyph> => {
    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            const ascii = computeAccidentalAscii(accidental)
            return align ?
                alignAscii(ascii) :
                ascii as string as Formatted<Ascii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return computeAccidentalSmiley(accidental) as string as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
            return computeAccidentalUnicode(accidental) as string as Formatted<Unicode>
    }
}

export {
    formatAccidental,
}
