import { equalJiPitches, Id, JiPitch, Maybe } from "../../../general"
import { getPrimaryComma } from "../primaryComma"
import { SymbolClass } from "../types"
import { JI_NOTATION } from "./levelSymbolClassIds"

const computeMaybeSymbolClassId = (jiPitch: JiPitch): Maybe<Id<SymbolClass>> =>
    JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return equalJiPitches(primaryComma, jiPitch)
    })

export {
    computeMaybeSymbolClassId,
}
