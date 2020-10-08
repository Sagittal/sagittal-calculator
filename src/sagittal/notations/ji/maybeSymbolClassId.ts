import { areJiPitchesEqual, Id, Maybe, Pitch } from "../../../general"
import { getPrimaryComma } from "../primaryComma"
import { SymbolClass } from "../types"
import { JI_NOTATION } from "./levelSymbolClassIds"

const computeMaybeSymbolClassId = (jiPitch: Pitch<{ rational: true }>): Maybe<Id<SymbolClass>> =>
    JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return areJiPitchesEqual(primaryComma, jiPitch)
    })

export {
    computeMaybeSymbolClassId,
}
