import { computeDecimalFromNum, computeNumSqrt, Id, indexOfFinalElement, multiplyRatios, Name } from "../../../general"
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
            // TODO: Geometric mean helper would be cool
            const commaMean = computeNumSqrt(multiplyRatios(primaryComma, nextPrimaryComma))

            const name = [
                getJiNotationSymbolAscii(symbolClassId),
                getJiNotationSymbolAscii(nextSymbolClassId),
            ].join(" ") as Name<CommaMean>

            return {
                // TODO: now we're very close to just using the irraional monzo!
                decimal: computeDecimalFromNum(commaMean),
                name,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
