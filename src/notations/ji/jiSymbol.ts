import { Id } from "../../general"
import { JI_SYMBOLS } from "./jiSymbols"
import { JiSymbol } from "./types"

const getJiSymbol = (jiSymbolId: Id<JiSymbol>): JiSymbol => {
    const jiSymbol = JI_SYMBOLS.find(jiSymbol => jiSymbol.id === jiSymbolId)

    if (!jiSymbol) {
        throw new Error(`Symbol with id ${jiSymbolId} not found`)
    }

    return jiSymbol
}

export {
    getJiSymbol,
}
