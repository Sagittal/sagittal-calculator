import { equalPitches, Id, JiPitch, MAX_JAVASCRIPT_PRECISION, Maybe } from "../../../general"
import { getPrimaryComma } from "../primaryComma"
import { SymbolClass } from "../types"
import { JI_NOTATION } from "./levelSymbolClassIds"

const computeMaybeSymbolClassId = (jiPitch: JiPitch): Maybe<Id<SymbolClass>> =>
    JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return equalPitches(primaryComma, jiPitch, MAX_JAVASCRIPT_PRECISION)
    })

export {
    computeMaybeSymbolClassId,
}
