import { Id } from "../../general"
import { PRIMARY_COMMAS } from "./primaryCommas"
import { getSymbolClass } from "./symbolClass"
import { PrimaryComma, SymbolClass } from "./types"

const getPrimaryComma = (symbolClassId: Id<SymbolClass>): PrimaryComma => {
    const symbolClass = getSymbolClass(symbolClassId)

    const primaryComma = PRIMARY_COMMAS
        .find((primaryComma: PrimaryComma): boolean => primaryComma.id === symbolClass.primaryCommaId)

    if (!primaryComma) {
        throw new Error(`Primary comma with ID ${symbolClass.primaryCommaId} not found`)
    }

    return primaryComma
}

export {
    getPrimaryComma,
}
