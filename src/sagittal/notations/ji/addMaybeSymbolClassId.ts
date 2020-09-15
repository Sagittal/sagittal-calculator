import { Comma, deepEquals, Id, isUndefined, Maybe } from "../../../general"
import { getSagittalComma } from "../getSagittalComma"
import { SymbolClass } from "../types"
import { JI_NOTATION_SYMBOL_CLASSES } from "./symbolClasses"
import { JiNotationSymbolClass } from "./types"

const addMaybeJiNotationSymbolClassId = (comma: Comma): Comma & { symbolClassId?: Id<SymbolClass> } => {
    const maybeJiNotationSymbolClass: Maybe<JiNotationSymbolClass> = JI_NOTATION_SYMBOL_CLASSES
        .find((jiNotationSymbolClass: JiNotationSymbolClass): boolean => {
            const primaryComma = getSagittalComma(jiNotationSymbolClass.primaryCommaId)

            return deepEquals(comma.monzo, primaryComma.monzo)
        })

    if (isUndefined(maybeJiNotationSymbolClass)) {
        return comma
    } else {
        return { ...comma, symbolClassId: maybeJiNotationSymbolClass.id }
    }
}

export {
    addMaybeJiNotationSymbolClassId,
}
