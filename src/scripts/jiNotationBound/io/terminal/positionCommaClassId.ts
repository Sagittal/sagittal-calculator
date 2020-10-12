import { areScamonsEqual, Id, isUndefined, Maybe, Scamon } from "../../../../general"
import { CommaClass, getPrimaryComma, JI_NOTATION } from "../../../../sagittal"

const computePositionCommaClassId = (position: Maybe<Scamon<{ rational: true }>>): Maybe<Id<CommaClass>> => {
    if (!position) {
        return undefined
    }

    const commaClassId = JI_NOTATION.find((commaClassId: Id<CommaClass>): boolean => {
        const primaryComma = getPrimaryComma(commaClassId)

        return areScamonsEqual(primaryComma, position)
    })

    if (!isUndefined(commaClassId)) {
        return commaClassId
    } else {
        return undefined
    }
}

export {
    computePositionCommaClassId,
}
