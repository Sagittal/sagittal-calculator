import {
    computeRationalMonzoFromRationalNum,
    computeRoughRationalMonzo,
    equalMonzos,
    FIVE_ROUGHNESS,
    Id,
    invertMonzo,
    RationalNum,
} from "../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingSymbolClassIds = (jiPitch: RationalNum): Array<Id<SymbolClass>> => {
    const monzo = computeRationalMonzoFromRationalNum(jiPitch)

    const exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>> = []
    const twoThreeFreeMonzo = computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS)

    JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
        const primaryComma = getPrimaryComma(symbolClassId)
        const primaryCommaMonzo = computeRationalMonzoFromRationalNum(primaryComma)
        const twoThreeFreePrimaryCommaMonzo = computeRoughRationalMonzo(primaryCommaMonzo, FIVE_ROUGHNESS)

        if (
            equalMonzos(twoThreeFreeMonzo, twoThreeFreePrimaryCommaMonzo) ||
            equalMonzos(twoThreeFreeMonzo, invertMonzo(twoThreeFreePrimaryCommaMonzo))
        ) {
            exactlyNotatingSymbolClassIds.push(symbolClassId)
        }
    })

    return exactlyNotatingSymbolClassIds
}

export {
    computeExactlyNotatingSymbolClassIds,
}
