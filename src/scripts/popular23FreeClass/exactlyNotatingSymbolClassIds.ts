import {
    computeJiPitchMonzo,
    computeRoughMonzo,
    deepEquals,
    FIVE_ROUGHNESS,
    Id,
    invertMonzo,
    JiPitch,
} from "../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../sagittal"

// Different than computeExactlyNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingSymbolClassIds = (jiPitch: JiPitch): Array<Id<SymbolClass>> => {
    const monzo = computeJiPitchMonzo(jiPitch)

    const exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>> = []
    const twoThreeFreeMonzo = computeRoughMonzo(monzo, FIVE_ROUGHNESS)

    JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
        const primaryComma = getPrimaryComma(symbolClassId)
        const twoThreeFreePrimaryCommaMonzo = computeRoughMonzo(primaryComma.monzo, FIVE_ROUGHNESS)

        if (
            deepEquals(twoThreeFreeMonzo, twoThreeFreePrimaryCommaMonzo) ||
            deepEquals(twoThreeFreeMonzo, invertMonzo(twoThreeFreePrimaryCommaMonzo))
        ) {
            exactlyNotatingSymbolClassIds.push(symbolClassId)
        }
    })

    return exactlyNotatingSymbolClassIds
}

export {
    computeExactlyNotatingSymbolClassIds,
}
