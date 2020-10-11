import { Formatted, Id } from "../../general"
import { getRepresentativeSymbol, Symbol, SymbolClass } from "../notations"
import { formatSymbol } from "./formatSymbol"
import { SymbolGlyph } from "./types"

const formatSymbolClass = (
    symbolClassId: Id<SymbolClass>,
    options: { align?: boolean } = {},
): Formatted<SymbolGlyph> => {
    const representativeSymbol: Symbol = getRepresentativeSymbol(symbolClassId)

    return formatSymbol(representativeSymbol, options)
}

export {
    formatSymbolClass,
}
