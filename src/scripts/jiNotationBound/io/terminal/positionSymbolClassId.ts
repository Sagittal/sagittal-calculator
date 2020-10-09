import { ACCURACY_THRESHOLD, areNonJiPitchesEqual, Id, isUndefined, Maybe, Pitch } from "../../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../../sagittal"

const computePositionSymbolClassId = (position: Maybe<Pitch>): Maybe<Id<SymbolClass>> => {
    if (!position) {
        return undefined
    }

    const symbolClassId = JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return areNonJiPitchesEqual(primaryComma, position, ACCURACY_THRESHOLD)
    })

    if (!isUndefined(symbolClassId)) {
        return symbolClassId
    } else {
        return undefined
    }
}

export {
    computePositionSymbolClassId,
}
