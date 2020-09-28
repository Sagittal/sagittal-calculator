import { Formatted, TableFormat } from "../../general"
import { Symbol } from "../notations"
import { formatSymbolAscii } from "./formatSymbolAscii"
import { computeSmileyFromAscii } from "./smiley"
import { SymbolGlyph, SymbolLongAscii, SymbolSmiley, SymbolUnicode } from "./types"

const formatSymbol = (
    symbol: Symbol,
    { tableFormat = TableFormat.TERMINAL, align = true }: { tableFormat?: TableFormat, align?: boolean },
): Formatted<SymbolGlyph> => {
    const ascii = symbol.revoAscii

    switch (tableFormat) {
        case TableFormat.TERMINAL:
            return align ? formatSymbolAscii(ascii) : ascii as string as Formatted<SymbolLongAscii>
        case TableFormat.FORUM:
            return computeSmileyFromAscii(ascii) as string as Formatted<SymbolSmiley>
        case TableFormat.SPREADSHEET:
            return symbol.revoUnicode as string as Formatted<SymbolUnicode>
    }
}

export {
    formatSymbol,
}
