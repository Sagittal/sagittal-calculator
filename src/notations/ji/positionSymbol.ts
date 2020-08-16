import { Cents } from "../../general"
import { JI_SYMBOLS } from "./symbols"
import { JiSymbol } from "./types"

const computePositionSymbol = (position: Cents | undefined): JiSymbol | undefined => {
    if (!position) {
        return undefined
    }

    return JI_SYMBOLS.find(symbol =>
        symbol.primaryComma.cents === position)
}

export {
    computePositionSymbol,
}
