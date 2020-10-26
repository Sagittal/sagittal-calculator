import {areScamonsEqual, isUndefined, Maybe, Scamon} from "../../../../general"
import {CommaClassId, getCommaClass, JI_NOTATION} from "../../../../sagittal"

const computePositionCommaClassId = (position: Maybe<Scamon<{rational: true}>>): Maybe<CommaClassId> => {
    if (!position) {
        return undefined
    }

    const commaClassId = JI_NOTATION.find((commaClassId: CommaClassId): boolean => {
        const commaClass = getCommaClass(commaClassId)

        return areScamonsEqual(commaClass.pitch, position)
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
