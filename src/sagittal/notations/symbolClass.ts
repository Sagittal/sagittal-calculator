import { Id } from "../../general"
import { SYMBOL_CLASSES } from "./symbolClasses"
import { SymbolClass } from "./types"

const getSymbolClass = (symbolClassId: Id<SymbolClass>): SymbolClass => {
    const symbolClass = SYMBOL_CLASSES.find((symbolClass: SymbolClass): boolean => symbolClass.id === symbolClassId)

    if (!symbolClass) {
        throw new Error(`Symbol class with ID ${symbolClassId} not found`)
    }

    return symbolClass
}

export {
    getSymbolClass,
}
