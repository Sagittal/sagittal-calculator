import { Formatted, ioSettings, TableFormat } from "../../general"
import { SagittalSymbol } from "../notations"
import { formatAscii } from "./formatAscii"
import { computeSmileyFromSymbol } from "./smiley"
import { Ascii, Glyph, Smiley, Unicode } from "./types"
import { SYMBOL_TO_UNICODE_MAP } from "./unicode"

const formatSymbol = (
    symbol: SagittalSymbol,
    { align = true }: { align?: boolean } = {},
): Formatted<Glyph> => {
    // TODO: at this point I'm just slightly perturbed that unicode is a dereference, smiley is a computation, and
    //  Ascii is a simple type assertion. I guess even if it's not peak performance it'd be nice if they starndardized
    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            return align ? formatAscii(symbol as string as Ascii) : symbol as string as Formatted<Ascii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return `[/pre]${computeSmileyFromSymbol(symbol)}[pre]` as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
            return SYMBOL_TO_UNICODE_MAP[ symbol ] as string as Formatted<Unicode>
    }
}

export {
    formatSymbol,
}
