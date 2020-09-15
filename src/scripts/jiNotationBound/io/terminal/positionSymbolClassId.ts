import { Cents, computeCentsFromPitch, Id, isCloseTo, Maybe } from "../../../../general"
import { getSagittalComma, JiNotationSymbolClass, JI_NOTATION_SYMBOL_CLASSES, SymbolClass } from "../../../../sagittal"

const computePositionJiNotationSymbolClassId = (position: Maybe<Cents>): Maybe<Id<SymbolClass>> => {
    if (!position) {
        return undefined
    }

    const jiNotationSymbolClass = JI_NOTATION_SYMBOL_CLASSES
        .find((jiNotationSymbolClass: JiNotationSymbolClass): boolean => {
            const primaryComma = getSagittalComma(jiNotationSymbolClass.primaryCommaId)

            return isCloseTo(computeCentsFromPitch(primaryComma), position)
        })

    if (jiNotationSymbolClass) {
        return jiNotationSymbolClass.id
    } else {
        return undefined
    }
}

export {
    computePositionJiNotationSymbolClassId,
}
