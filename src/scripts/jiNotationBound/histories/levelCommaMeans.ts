import { computeRealSqrt, Id, indexOfFinalElement, multiplyRationals, Name } from "../../../general"
import {
    CommaMean,
    getPrimaryComma,
    getRepresentativeSymbol,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SymbolClass,
    SymbolLongAscii,
} from "../../../sagittal"

const getJiNotationSymbolAscii = (symbolClassId: Id<SymbolClass>): SymbolLongAscii => {
    const representativeSymbol = getRepresentativeSymbol(symbolClassId)

    return representativeSymbol.revoAscii
}

const computeJiNotationLevelCommaMeans = (jiNotationLevel: JiNotationLevel): CommaMean[] => {
    const jiNotationLevelSymbolClassIds = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass =
        jiNotationLevelSymbolClassIds.slice(0, indexOfFinalElement(jiNotationLevelSymbolClassIds))

    return jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass
        .map((symbolClassId: Id<SymbolClass>, index: number): CommaMean => {
            const nextSymbolClassId = jiNotationLevelSymbolClassIds[ index + 1 ]

            const primaryComma = getPrimaryComma(symbolClassId)
            const nextPrimaryComma = getPrimaryComma(nextSymbolClassId)
            // Todo: DEFER UNTIL AFTER SCALED MONZO
            //  Geometric mean helper would be cool
            const commaMean = computeRealSqrt(multiplyRationals(primaryComma, nextPrimaryComma))

            const name = [
                getJiNotationSymbolAscii(symbolClassId),
                getJiNotationSymbolAscii(nextSymbolClassId),
            ].join(" ") as Name<CommaMean>

            return {
                ...commaMean,
                name,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
