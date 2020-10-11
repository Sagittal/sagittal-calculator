import { Formatted, Id, TableFormat } from "../../general"
import { getRepresentativeSymbol, Symbol, SymbolClass } from "../notations"
import { formatSymbol } from "./formatSymbol"
import { SymbolGlyph } from "./types"

// TODO: These options are required by design, to force you to pass it the ioSettings global
//  - But wait, shouldn't we just rely on it being a global, instead of passing it around?
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
