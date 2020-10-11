import { Formatted, ioSettings, TableFormat } from "../../general"
import { Symbol } from "../notations"
import { formatSymbolAscii } from "./formatSymbolAscii"
import { computeSmileyFromAscii } from "./smiley"
import { SymbolGlyph, SymbolLongAscii, SymbolSmiley, SymbolUnicode } from "./types"

const formatSymbol = (
    symbol: Symbol,
    { align = true }: { align?: boolean } = {},
): Formatted<SymbolGlyph> => {
    const ascii = symbol.revoAscii

    switch (ioSettings.tableFormat) {
        case TableFormat.TERMINAL:
            return align ? formatSymbolAscii(ascii) : ascii as string as Formatted<SymbolLongAscii>
        case TableFormat.FORUM:
        case TableFormat.FORUM_WITH_SPLIT_QUOTIENTS:
            return `[/pre]${computeSmileyFromAscii(ascii)}[pre]` as Formatted<SymbolSmiley>
        case TableFormat.SPREADSHEET:
            return symbol.revoUnicode as string as Formatted<SymbolUnicode>
    }
}

export {
    formatSymbol,
}
