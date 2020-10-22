import {areRationalScamonsEqual, Id, Maybe, Scamon} from "../../../general"
import {CommaClass, getCommaClass} from "../../ji"
import {JI_NOTATION} from "./levelCommaClassIds"

const computeMaybeCommaClassId = (jiPitch: Scamon<{rational: true}>): Maybe<Id<CommaClass>> =>
    JI_NOTATION.find((commaClassId: Id<CommaClass>): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areRationalScamonsEqual(commaClass.pitch, jiPitch)
    })

export {
    computeMaybeCommaClassId,
}
