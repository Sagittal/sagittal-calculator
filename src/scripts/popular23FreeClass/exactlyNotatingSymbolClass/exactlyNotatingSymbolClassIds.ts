import {
    computeRationalMonzoFromRational,
    computeRoughRationalMonzo,
    equalRealMonzos,
    FIVE_ROUGHNESS,
    Id,
    invertRealMonzo,
    Rational,
} from "../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingSymbolClassIds = (jiPitch: Rational): Array<Id<SymbolClass>> => {
    const rationalMonzo = computeRationalMonzoFromRational(jiPitch)

    const exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>> = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(rationalMonzo, FIVE_ROUGHNESS)

    JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
        const primaryComma = getPrimaryComma(symbolClassId)
        const primaryCommaMonzo = computeRationalMonzoFromRational(primaryComma)
        const two3FreePrimaryCommaMonzo = computeRoughRationalMonzo(primaryCommaMonzo, FIVE_ROUGHNESS)

        if (
            equalRealMonzos(two3FreeRationalMonzo, two3FreePrimaryCommaMonzo) ||
            equalRealMonzos(two3FreeRationalMonzo, invertRealMonzo(two3FreePrimaryCommaMonzo))
        ) {
            exactlyNotatingSymbolClassIds.push(symbolClassId)
        }
    })

    return exactlyNotatingSymbolClassIds
}

export {
    computeExactlyNotatingSymbolClassIds,
}
