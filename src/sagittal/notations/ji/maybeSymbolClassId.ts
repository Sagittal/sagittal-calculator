import { areRationalScamonsEqual, Id, Maybe, Scamon } from "../../../general"
import { getPrimaryComma } from "../primaryComma"
import { SymbolClass } from "../types"
import { JI_NOTATION } from "./levelSymbolClassIds"

const computeMaybeSymbolClassId = (jiPitch: Scamon<{ rational: true }>): Maybe<Id<SymbolClass>> =>
    JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return areRationalScamonsEqual(primaryComma, jiPitch)
    })

export {
    computeMaybeSymbolClassId,
}
