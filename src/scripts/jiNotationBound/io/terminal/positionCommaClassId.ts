import { areScamonsEqual, Id, isUndefined, Maybe, Scamon } from "../../../../general"
import { CommaClass, getCommaClass, JI_NOTATION } from "../../../../sagittal"

const computePositionCommaClassId = (position: Maybe<Scamon<{ rational: true }>>): Maybe<Id<CommaClass>> => {
    if (!position) {
        return undefined
    }

    const commaClassId = JI_NOTATION.find((commaClassId: Id<CommaClass>): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areScamonsEqual(commaClass, position)
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
