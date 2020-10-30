import {Formatted, ioSettings, Maybe, TableFormat} from "../../../general"
import {Accidental} from "../flavor"
import {computeAccidentalAscii} from "./ascii"
import {formatAscii} from "./formatAscii"
import {computeAccidentalSmiley} from "./smiley"
import {Ascii, Glyph, Smiley, Unicode} from "./types"
import {computeAccidentalUnicode} from "./unicode"

const formatAccidental = (accidental: Maybe<Accidental>, {align = true}: {align?: boolean} = {}): Formatted<Glyph> => {
    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            const ascii = computeAccidentalAscii(accidental)
            return align ?
                formatAscii(ascii) :
                ascii as string as Formatted<Ascii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return `[/pre]${computeAccidentalSmiley(accidental)}[pre]` as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
            return computeAccidentalUnicode(accidental) as string as Formatted<Unicode>
    }
}

export {
    formatAccidental,
}
