import { Formatted, ioSettings, TableFormat } from "../../general"
import { NotationCaptureZoneAccidental } from "../notations"
import { formatAscii } from "./formatAscii"
import { computeSmileyFromAscii } from "./smiley"
import { Ascii, Glyph, Smiley, Unicode } from "./types"

const formatSymbol = (
    // TODO: needs work
    symbol: NotationCaptureZoneAccidental,
    { align = true }: { align?: boolean } = {},
): Formatted<Glyph> => {
    const ascii = symbol.revoAscii

    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            return align ? formatAscii(ascii) : ascii as string as Formatted<Ascii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return `[/pre]${computeSmileyFromAscii(ascii)}[pre]` as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
            return symbol.revoUnicode as string as Formatted<Unicode>
    }
}

export {
    formatSymbol,
}
