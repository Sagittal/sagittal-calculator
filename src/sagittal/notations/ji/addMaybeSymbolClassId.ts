import { Comma, deepEquals, Id, isUndefined, Maybe } from "../../../general"
import { getPrimaryComma } from "../primaryComma"
import { SymbolClass } from "../types"
import { JI_NOTATION } from "./levelSymbolClassIds"

const addMaybeSymbolClassId = (comma: Comma): Comma & { symbolClassId?: Id<SymbolClass> } => {
    const maybeSymbolClassId: Maybe<Id<SymbolClass>> =
        JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
            const primaryComma = getPrimaryComma(symbolClassId)

            return deepEquals(comma.monzo, primaryComma.monzo)
        })

    if (isUndefined(maybeSymbolClassId)) {
        return comma
    } else {
        return { ...comma, symbolClassId: maybeSymbolClassId }
    }
}

export {
    addMaybeSymbolClassId,
}
