import { Cents, computeCentsFromPitch, Id, isCloseTo, isUndefined, Maybe } from "../../../../general"
import { getSagittalComma, getSymbolClass, JI_NOTATION, SymbolClass } from "../../../../sagittal"

const computePositionSymbolClassId = (position: Maybe<Cents>): Maybe<Id<SymbolClass>> => {
    if (!position) {
        return undefined
    }

    const symbolClassId = JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        // TODO: there should be a getPrimaryComma helper for this, which happens a lot
        const symbolClass = getSymbolClass(symbolClassId)
        const primaryComma = getSagittalComma(symbolClass.primaryCommaId)

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
