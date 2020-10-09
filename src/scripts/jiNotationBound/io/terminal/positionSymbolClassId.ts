import { areScamonsEqual, Id, isUndefined, Maybe, Scamon } from "../../../../general"
import { getPrimaryComma, JI_NOTATION, SymbolClass } from "../../../../sagittal"

const computePositionSymbolClassId = (position: Maybe<Scamon<{ rational: true }>>): Maybe<Id<SymbolClass>> => {
    if (!position) {
        return undefined
    }

    const symbolClassId = JI_NOTATION.find((symbolClassId: Id<SymbolClass>): boolean => {
        const primaryComma = getPrimaryComma(symbolClassId)

        return areScamonsEqual(primaryComma, position)
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
