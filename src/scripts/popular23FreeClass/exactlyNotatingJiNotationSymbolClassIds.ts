import {
    computeJiPitchMonzo,
    computeRoughMonzo,
    deepEquals,
    FIVE_ROUGHNESS,
    Id,
    invertMonzo,
    JiPitch,
} from "../../general"
import { getSagittalComma, JiNotationSymbolClass, JI_NOTATION_SYMBOL_CLASSES, SymbolClass } from "../../sagittal"

// Different than computeExactlyNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingJiNotationSymbolClassIds = (jiPitch: JiPitch): Array<Id<SymbolClass>> => {
    const monzo = computeJiPitchMonzo(jiPitch)

    const exactlyNotatingJiNotationSymbolClassIds: Array<Id<SymbolClass>> = []
    const twoThreeFreeMonzo = computeRoughMonzo(monzo, FIVE_ROUGHNESS)

    JI_NOTATION_SYMBOL_CLASSES.forEach((jiNotationSymbolClass: JiNotationSymbolClass): void => {
        const primaryComma = getSagittalComma(jiNotationSymbolClass.primaryCommaId)
        const twoThreeFreePrimaryCommaMonzo = computeRoughMonzo(primaryComma.monzo, FIVE_ROUGHNESS)

        if (
            deepEquals(twoThreeFreeMonzo, twoThreeFreePrimaryCommaMonzo) ||
            deepEquals(twoThreeFreeMonzo, invertMonzo(twoThreeFreePrimaryCommaMonzo))
        ) {
            exactlyNotatingJiNotationSymbolClassIds.push(jiNotationSymbolClass.id)
        }
    })

    return exactlyNotatingJiNotationSymbolClassIds
}

export {
    computeExactlyNotatingJiNotationSymbolClassIds,
}
