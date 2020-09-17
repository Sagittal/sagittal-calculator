import { Comma, deepEquals, Id, isUndefined, Maybe } from "../../../general"
import { getSagittalComma } from "../getSagittalComma"
import { getSymbolClass } from "../symbolClass"
import { SymbolClass } from "../types"
import { JI_NOTATION } from "./levelSymbolClassIds"

const addMaybeSymbolClassId = (comma: Comma): Comma & { symbolClassId?: Id<SymbolClass> } => {
    const maybeSymbolClassId: Maybe<Id<SymbolClass>> =
        JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
            const symbolClass = getSymbolClass(symbolClassId)
            const primaryComma = getSagittalComma(symbolClass.primaryCommaId)

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
