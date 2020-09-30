import {
    computeRationalMonzoFromRational,
    computeRoughRationalMonzo,
    equalMonzos,
    FIVE_ROUGHNESS,
    Id,
    invertMonzo,
    Rational,
} from "../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingSymbolClassIds = (jiPitch: Rational): Array<Id<SymbolClass>> => {
    const monzo = computeRationalMonzoFromRational(jiPitch)

    const exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>> = []
    const two3FreeMonzo = computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS)

    JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
        const primaryComma = getPrimaryComma(symbolClassId)
        const primaryCommaMonzo = computeRationalMonzoFromRational(primaryComma)
        const two3FreePrimaryCommaMonzo = computeRoughRationalMonzo(primaryCommaMonzo, FIVE_ROUGHNESS)

        if (
            equalMonzos(two3FreeMonzo, two3FreePrimaryCommaMonzo) ||
            equalMonzos(two3FreeMonzo, invertMonzo(two3FreePrimaryCommaMonzo))
        ) {
            exactlyNotatingSymbolClassIds.push(symbolClassId)
        }
    })

    return exactlyNotatingSymbolClassIds
}

export {
    computeExactlyNotatingSymbolClassIds,
}
