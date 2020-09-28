import { Formatted, Id, TableFormat } from "../../general"
import { getRepresentativeSymbol, Symbol, SymbolClass } from "../notations"
import { formatSymbol } from "./formatSymbol"
import { SymbolGlyph } from "./types"

// These options are required by design, to force you to pass it the ioSettings global
const formatSymbolClass = (
    symbolClassId: Id<SymbolClass>,
    options: { tableFormat?: TableFormat, align?: boolean },
): Formatted<SymbolGlyph> => {
    const representativeSymbol: Symbol = getRepresentativeSymbol(symbolClassId)

    return formatSymbol(representativeSymbol, options)
}

export {
    formatSymbolClass,
}
