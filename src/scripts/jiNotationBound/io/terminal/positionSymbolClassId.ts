import { Cents, computeCentsFromPitch, Id, isCloseTo, isUndefined, Maybe } from "../../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../../sagittal"

const computePositionSymbolClassId = (position: Maybe<Cents>): Maybe<Id<SymbolClass>> => {
    if (!position) {
        return undefined
    }

    const symbolClassId = JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return isCloseTo(computeCentsFromPitch(primaryComma), position)
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
