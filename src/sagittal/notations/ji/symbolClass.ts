import { Id } from "../../../general"
import { SymbolClass } from "../types"
import { JI_NOTATION_SYMBOL_CLASSES } from "./symbolClasses"
import { JiNotationSymbolClass } from "./types"

const getJiNotationSymbolClass = (jiNotationSymbolClassId: Id<SymbolClass>): JiNotationSymbolClass => {
    const jiNotationSymbolClass = JI_NOTATION_SYMBOL_CLASSES
        .find((jiNotationSymbolClass: JiNotationSymbolClass): boolean => {
            return jiNotationSymbolClass.id === jiNotationSymbolClassId
        })

    if (!jiNotationSymbolClass) {
        throw new Error(`JI Notation symbol class with id ${jiNotationSymbolClassId} not found`)
    }

    return jiNotationSymbolClass
}

export {
    getJiNotationSymbolClass,
}
