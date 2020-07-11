import { SYMBOLS } from "./symbols"
import { Cents } from "../../utilities/types"
import { SagittalSymbol } from "./types"

const computePositionSymbol = (position: Cents | undefined): SagittalSymbol | undefined => {
    if (!position) return undefined

    return SYMBOLS.find(symbol => {
        return symbol.primaryComma.position === position
    })
}

export {
    computePositionSymbol,
}
