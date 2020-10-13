import { areMonzosEqual, computeRoughRationalMonzo, Id, invertMonzo, Scamon, TWO_3_FREE } from "../../../general"
import { CommaClass, getCommaClass, JI_NOTATION } from "../../../sagittal"

// Different than computeNotatingCommas because this one only concerns itself with commas that are in Sagittal
const computeNotatingCommaClassIds = ({ monzo }: Scamon<{ rational: true }>): Array<Id<CommaClass>> => {
    const notatingCommaClassIds: Array<Id<CommaClass>> = []
    const two3FreeRationalMonzo = computeRoughRationalMonzo(monzo, TWO_3_FREE)

    JI_NOTATION.forEach((commaClassId: Id<CommaClass>): void => {
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
