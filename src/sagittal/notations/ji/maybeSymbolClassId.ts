import { equalNums, Id, Maybe, RationalNum } from "../../../general"
import { getPrimaryComma } from "../primaryComma"
import { SymbolClass } from "../types"
import { JI_NOTATION } from "./levelSymbolClassIds"

const computeMaybeSymbolClassId = (jiPitch: RationalNum): Maybe<Id<SymbolClass>> =>
    JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return equalNums(primaryComma, jiPitch)
    })

export {
    computeMaybeSymbolClassId,
}
