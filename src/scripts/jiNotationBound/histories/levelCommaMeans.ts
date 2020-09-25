import { Cents, computeCentsFromPitch, computeDecimalFromCents, Id, indexOfFinalElement, Name } from "../../../general"
import {
    getPrimaryComma,
    getRepresentativeSymbol,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SymbolClass,
    SymbolLongAscii,
} from "../../../sagittal"
import { CommaMean } from "./types"

const getJiNotationSymbolCents = (symbolClassId: Id<SymbolClass>): Cents => {
    const primaryComma = getPrimaryComma(symbolClassId)

    return computeCentsFromPitch(primaryComma)
}

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

            const cents = (
                getJiNotationSymbolCents(symbolClassId) + getJiNotationSymbolCents(nextSymbolClassId)
            ) / 2 as Cents
            const decimal = computeDecimalFromCents(cents)
            const name = [
                getJiNotationSymbolAscii(symbolClassId),
                getJiNotationSymbolAscii(nextSymbolClassId),
            ].join(" ") as Name<CommaMean>

            return {
                decimal,
                name,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
