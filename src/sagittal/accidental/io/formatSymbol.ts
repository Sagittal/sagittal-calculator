import { Formatted, ioSettings, TableFormat } from "../../../general"
import { Symbol } from "../symbol"
import { computeAsciiFromSymbol } from "./ascii"
import { formatAscii } from "./formatAscii"
import { computeSmileyFromSymbol } from "./smiley"
import { Ascii, Smiley, Unicode } from "./types"
import { computeUnicodeFromSymbol } from "./unicode"

const formatSymbol = (
    symbol: Symbol,
    { align = true }: { align?: boolean } = {},
): Formatted<Ascii | Unicode | Smiley> => {
    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            const ascii = computeAsciiFromSymbol(symbol)
            return align ?
                formatAscii(ascii) :
                ascii as string as Formatted<Ascii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return `[/pre]${computeSmileyFromSymbol(symbol)}[pre]` as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
            return computeUnicodeFromSymbol(symbol) as string as Formatted<Unicode>
    }
}

export {
    formatSymbol,
}
