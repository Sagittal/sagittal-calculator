import { Id } from "../../general"
import { JI_SYMBOLS } from "./symbols"
import { JiSymbol } from "./types"

const getSymbol = (symbolId: Id<JiSymbol>): JiSymbol => {
    const symbol = JI_SYMBOLS.find(symbol => symbol.id === symbolId)

    if (!symbol) {
        throw new Error(`Symbol with id ${symbolId} not found`)
    }

    return symbol
}

export {
    getSymbol,
}
