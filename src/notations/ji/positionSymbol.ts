import { Cents } from "../../general"
import { SYMBOLS } from "./symbols"
import { JiSymbol } from "./types"

const computePositionSymbol = (position: Cents | undefined): JiSymbol | undefined => {
    if (!position) {
        return undefined
    }

    return SYMBOLS.find(symbol =>
        symbol.primaryComma.cents === position)
}

export {
    computePositionSymbol,
}
