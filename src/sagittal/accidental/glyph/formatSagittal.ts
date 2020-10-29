import {Formatted, ioSettings, Maybe, TableFormat} from "../../../general"
import {Sagittal} from "../sagittal"
import {computeSagittalAscii} from "./ascii"
import {formatAscii} from "./formatAscii"
import {computeSagittalSmiley} from "./smiley"
import {Ascii, Glyph, Smiley, Unicode} from "./types"
import {computeSagittalUnicode} from "./unicode"

const formatSagittal = (sagittal: Maybe<Sagittal>, {align = true}: {align?: boolean} = {}): Formatted<Glyph> => {
    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            const ascii = computeSagittalAscii(sagittal)
            return align ?
                formatAscii(ascii) :
                ascii as string as Formatted<Ascii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return `[/pre]${computeSagittalSmiley(sagittal)}[pre]` as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
            return computeSagittalUnicode(sagittal) as string as Formatted<Unicode>
    }
}

export {
    formatSagittal,
}
