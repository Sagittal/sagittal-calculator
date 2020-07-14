import { Cents } from "../../general"
import { SYMBOLS } from "./symbols"
import { SagittalSymbol } from "./types"

const computePositionSymbol = (position: Cents | undefined): SagittalSymbol | undefined => {
    if (!position) {
        return undefined
    }

    return SYMBOLS.find(symbol =>
        symbol.primaryComma.cents === position)
}

export {
    computePositionSymbol,
}
