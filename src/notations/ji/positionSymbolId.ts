import { Cents, Id } from "../../general"
import { JI_SYMBOLS } from "./symbols"
import { JiSymbol } from "./types"

const computePositionSymbolId = (position: Cents | undefined): Id<JiSymbol> | undefined => {
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
    computePositionSymbolId,
}
