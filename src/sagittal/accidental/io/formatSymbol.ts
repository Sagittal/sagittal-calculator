import {Formatted, ioSettings, TableFormat} from "../../../general"
import {Symbol} from "../symbol"
import {computeSymbolAscii} from "./ascii"
import {formatAscii} from "./formatAscii"
import {computeSymbolSmiley} from "./smiley"
import {Ascii, Glyph, Smiley, Unicode} from "./types"
import {computeSymbolUnicode} from "./unicode"

const formatSymbol = (symbol: Symbol, { align = true }: { align?: boolean } = {}): Formatted<Glyph> => {
    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            const ascii = computeSymbolAscii(symbol)
            return align ?
                formatAscii(ascii) :
                ascii as string as Formatted<Ascii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return `[/pre]${computeSymbolSmiley(symbol)}[pre]` as Formatted<Smiley>
        case TableFormat.SPREADSHEET:
            return computeSymbolUnicode(symbol) as string as Formatted<Unicode>
    }
}

export {
    formatSymbol,
}
