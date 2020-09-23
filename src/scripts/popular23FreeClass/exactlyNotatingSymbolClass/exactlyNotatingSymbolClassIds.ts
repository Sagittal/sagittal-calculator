import {
    computeMonzoFromJiPitch,
    computeRoughMonzo,
    equalMonzos,
    FIVE_ROUGHNESS,
    Id,
    invertMonzo,
    JiPitch,
} from "../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingSymbolClassIds = (jiPitch: JiPitch): Array<Id<SymbolClass>> => {
    const monzo = computeMonzoFromJiPitch(jiPitch)

    const exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>> = []
    const twoThreeFreeMonzo = computeRoughMonzo(monzo, FIVE_ROUGHNESS)

    JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
        const primaryComma = getPrimaryComma(symbolClassId)
        const primaryCommaMonzo = computeMonzoFromJiPitch(primaryComma)
        const twoThreeFreePrimaryCommaMonzo = computeRoughMonzo(primaryCommaMonzo, FIVE_ROUGHNESS)

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
