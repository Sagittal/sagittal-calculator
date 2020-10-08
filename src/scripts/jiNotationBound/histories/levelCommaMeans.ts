import { addJiPitches, Id, indexOfFinalElement, Name, Pitch, SQRT_SCALER } from "../../../general"
import {
    CommaMean,
    getPrimaryComma,
    getRepresentativeSymbol,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SymbolClass,
} from "../../../sagittal"

const computeJiNotationLevelCommaMeans = (jiNotationLevel: JiNotationLevel): CommaMean[] => {
    const jiNotationLevelSymbolClassIds = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass =
        jiNotationLevelSymbolClassIds.slice(0, indexOfFinalElement(jiNotationLevelSymbolClassIds))

    return jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass
        .map((symbolClassId: Id<SymbolClass>, index: number): CommaMean => {
            const nextSymbolClassId = jiNotationLevelSymbolClassIds[ index + 1 ]

            const primaryComma = getPrimaryComma(symbolClassId)
            const nextPrimaryComma = getPrimaryComma(nextSymbolClassId)

            const name = [
                getRepresentativeSymbol(symbolClassId).revoAscii,
                getRepresentativeSymbol(nextSymbolClassId).revoAscii,
            ].join(" ") as Name<CommaMean>

            return {
                pitch: {
                    monzo: addJiPitches(primaryComma, nextPrimaryComma).monzo,
                    scaler: SQRT_SCALER,
                } as Pitch<{ rational: false }>,
                name,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
