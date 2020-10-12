import { areRationalScamonsEqual, Id, Maybe, Scamon } from "../../../general"
import { getPrimaryComma } from "../primaryComma"
import { CommaClass } from "../types"
import { JI_NOTATION } from "./levelCommaClassIds"

const computeMaybeCommaClassId = (jiPitch: Scamon<{ rational: true }>): Maybe<Id<CommaClass>> =>
    JI_NOTATION.find((commaClassId: Id<CommaClass>): boolean => {
        const primaryComma = getPrimaryComma(commaClassId)

        return areRationalScamonsEqual(primaryComma, jiPitch)
    })

export {
    computeMaybeCommaClassId,
}
