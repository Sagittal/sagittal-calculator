import { Cents, Id } from "../../general"
import { JI_SYMBOLS } from "./jiSymbols"
import { JiSymbol } from "./types"

const computePositionJiSymbolId = (position: Cents | undefined): Id<JiSymbol> | undefined => {
    if (!position) {
        return undefined
    }

    const symbol = JI_SYMBOLS.find(symbol =>
        symbol.primaryComma.cents === position)

    if (symbol) {
        return symbol.id
    } else {
        return undefined
    }
}

export {
    computePositionJiSymbolId,
}
