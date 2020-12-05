import {areRationalScamonsEqual, Maybe, Scamon} from "@sagittal/general"
import {CommaClassId, getCommaClass} from "../../notation"
import {JI_NOTATION} from "./levelCommaClassIds"

const computeMaybeCommaClassId = (jiPitch: Scamon<{rational: true}>): Maybe<CommaClassId> =>
    JI_NOTATION.find((commaClassId: CommaClassId): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areRationalScamonsEqual(commaClass.pitch, jiPitch)
    })

export {
    computeMaybeCommaClassId,
}
