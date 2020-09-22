import { Formatted, Id, TableFormat } from "../../general"
import { getRepresentativeSymbol, Symbol, SymbolClass } from "../notations"
import { computeSmileyFromAscii } from "./smiley"
import { formatSymbolAscii } from "./symbolAscii"
import { SymbolLongAscii, SymbolSmiley, SymbolUnicode } from "./types"

// these options are required by design, to force you to pass it the ioSettings global
const formatSymbolClass = (
    symbolClassId: Id<SymbolClass>,
    // todo: perhaps this forTable thing should be used more widely, or called like "doNotAlign" or something
    { tableFormat = TableFormat.TERMINAL, forTable = true }: { tableFormat?: TableFormat, forTable?: boolean },
): Formatted<SymbolSmiley | SymbolLongAscii | SymbolUnicode> => {
    const representativeSymbol: Symbol = getRepresentativeSymbol(symbolClassId)
    const ascii = representativeSymbol.revoAscii

    switch (tableFormat) {
        case TableFormat.TERMINAL:
            return forTable ? formatSymbolAscii(ascii) : ascii as string as Formatted<SymbolLongAscii>
        case TableFormat.FORUM:
            return computeSmileyFromAscii(ascii) as string as Formatted<SymbolSmiley>
        case TableFormat.SPREADSHEET:
            return representativeSymbol.revoUnicode as string as Formatted<SymbolUnicode>
    }
}

export {
    formatSymbolClass,
}
