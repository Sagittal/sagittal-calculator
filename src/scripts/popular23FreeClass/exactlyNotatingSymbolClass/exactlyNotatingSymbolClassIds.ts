import { areMonzosEqual, computeRoughRationalMonzo, Id, invertMonzo, Scamon, TWO_3_FREE } from "../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeExactlyNotatingSymbolClassIds = ({ monzo }: Scamon<{ rational: true }>): Array<Id<SymbolClass>> => {
    const exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>> = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(monzo, TWO_3_FREE)

    JI_NOTATION.forEach((symbolClassId: Id<SymbolClass>): void => {
        const primaryComma = getPrimaryComma(symbolClassId)
        const two3FreePrimaryCommaMonzo = computeRoughRationalMonzo(primaryComma.monzo, TWO_3_FREE)

        if (
            areMonzosEqual(two3FreeRationalMonzo, two3FreePrimaryCommaMonzo) ||
            areMonzosEqual(two3FreeRationalMonzo, invertMonzo(two3FreePrimaryCommaMonzo))
        ) {
            exactlyNotatingSymbolClassIds.push(symbolClassId)
        }
    })

    return exactlyNotatingSymbolClassIds
}

export {
    computeExactlyNotatingSymbolClassIds,
}
