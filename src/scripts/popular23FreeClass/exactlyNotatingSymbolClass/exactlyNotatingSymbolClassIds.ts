import { computeRoughRationalMonzo, equalMonzos, FIVE_ROUGHNESS, Id, invertMonzo, Pitch } from "../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingSymbolClassIds = (jiPitch: Pitch<{ rational: true }>): Array<Id<SymbolClass>> => {
    const rationalMonzo = jiPitch.monzo

    const exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>> = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(rationalMonzo, FIVE_ROUGHNESS)

    JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
        const primaryComma = getPrimaryComma(symbolClassId)
        const primaryCommaMonzo = primaryComma.monzo
        const two3FreePrimaryCommaMonzo = computeRoughRationalMonzo(primaryCommaMonzo, FIVE_ROUGHNESS)

        if (
            equalMonzos(two3FreeRationalMonzo, two3FreePrimaryCommaMonzo) ||
            equalMonzos(two3FreeRationalMonzo, invertMonzo(two3FreePrimaryCommaMonzo))
        ) {
            exactlyNotatingSymbolClassIds.push(symbolClassId)
        }
    })

    return exactlyNotatingSymbolClassIds
}

export {
    computeExactlyNotatingSymbolClassIds,
}
