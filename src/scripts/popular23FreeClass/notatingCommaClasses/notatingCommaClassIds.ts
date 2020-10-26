import {areMonzosEqual, computeRoughRationalMonzo, invertMonzo, Scamon, TWO_3_FREE} from "../../../general"
import {CommaClassId, getCommaClass, JI_NOTATION} from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeNotatingCommaClassIds = ({monzo}: Scamon<{rational: true}>): CommaClassId[] => {
    const notatingCommaClassIds: CommaClassId[] = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(monzo, TWO_3_FREE)

    JI_NOTATION.forEach((commaClassId: CommaClassId): void => {
        const commaClass = getCommaClass(commaClassId)
        const commaClassTwo3FreeMonzo = computeRoughRationalMonzo(commaClass.pitch.monzo, TWO_3_FREE)

        if (
            areMonzosEqual(two3FreeRationalMonzo, commaClassTwo3FreeMonzo) ||
            areMonzosEqual(two3FreeRationalMonzo, invertMonzo(commaClassTwo3FreeMonzo))
        ) {
            notatingCommaClassIds.push(commaClassId)
        }
    })

    return notatingCommaClassIds
}

export {
    computeNotatingCommaClassIds,
}
