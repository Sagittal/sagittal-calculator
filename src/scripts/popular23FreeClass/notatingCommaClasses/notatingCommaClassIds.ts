import { areMonzosEqual, computeRoughRationalMonzo, Id, invertMonzo, Scamon, TWO_3_FREE } from "../../../general"
import { CommaClass, getPrimaryComma, JI_NOTATION } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeNotatingCommaClassIds = ({ monzo }: Scamon<{ rational: true }>): Array<Id<CommaClass>> => {
    const notatingCommaClassIds: Array<Id<CommaClass>> = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(monzo, TWO_3_FREE)

    JI_NOTATION.forEach((commaClassId: Id<CommaClass>): void => {
        const primaryComma = getPrimaryComma(commaClassId)
        const two3FreePrimaryCommaMonzo = computeRoughRationalMonzo(primaryComma.monzo, TWO_3_FREE)

        if (
            areMonzosEqual(two3FreeRationalMonzo, two3FreePrimaryCommaMonzo) ||
            areMonzosEqual(two3FreeRationalMonzo, invertMonzo(two3FreePrimaryCommaMonzo))
        ) {
            notatingCommaClassIds.push(commaClassId)
        }
    })

    return notatingCommaClassIds
}

export {
    computeNotatingCommaClassIds,
}
