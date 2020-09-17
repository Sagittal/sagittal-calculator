import { Cents, CentsPosition, computeCentsFromPitch, Id, indexOfFinalElement, Name, Pitch } from "../../../general"
import {
    getPrimaryComma,
    getRepresentativeSymbol,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SymbolClass,
    SymbolLongAscii,
} from "../../../sagittal"

const getJiNotationSymbolCents = (symbolClassId: Id<SymbolClass>): Cents => {
    const primaryComma = getPrimaryComma(symbolClassId)

    return computeCentsFromPitch(primaryComma)
}

const getJiNotationSymbolAscii = (symbolClassId: Id<SymbolClass>): SymbolLongAscii => {
    const representativeSymbol = getRepresentativeSymbol(symbolClassId)

    return representativeSymbol.ascii
}

const computeJiNotationLevelCommaMeans = (jiNotationLevel: JiNotationLevel): CentsPosition[] => {
    const jiNotationLevelSymbolClassIds = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass =
        jiNotationLevelSymbolClassIds.slice(0, indexOfFinalElement(jiNotationLevelSymbolClassIds))

    return jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass
        .map((symbolClassId: Id<SymbolClass>, index: number): CentsPosition => {
            const nextSymbolClassId = jiNotationLevelSymbolClassIds[ index + 1 ]

            const cents = (
                getJiNotationSymbolCents(symbolClassId) + getJiNotationSymbolCents(nextSymbolClassId)
            ) / 2 as Cents
            const name = [
                getJiNotationSymbolAscii(symbolClassId),
                getJiNotationSymbolAscii(nextSymbolClassId),
            ].join(" ") as Name<Pitch>

            return {
                name,
                cents,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
