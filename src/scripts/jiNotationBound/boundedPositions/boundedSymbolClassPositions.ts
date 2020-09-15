import { Cents, computeCentsFromPitch, Id } from "../../../general"
import {
    getJiNotationSymbolClass,
    getSagittalComma,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SymbolClass,
} from "../../../sagittal"
import { computeNeighborPositions } from "./neighborPositions"
import { BoundedSymbolClassPositions } from "./types"

const computeBoundedSymbolClassPositions = (
    position: Cents,
    jiNotationLevel: JiNotationLevel,
): BoundedSymbolClassPositions => {
    const jiNotationLevelSymbolClassIds: Array<Id<SymbolClass>> = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelSymbolPositions: Cents[] = jiNotationLevelSymbolClassIds
        .map((jiNotationLevelSymbolClassId: Id<SymbolClass>): Cents => {
            const jiNotationSymbolClass = getJiNotationSymbolClass(jiNotationLevelSymbolClassId)
            const primaryComma = getSagittalComma(jiNotationSymbolClass.primaryCommaId)

            return computeCentsFromPitch(primaryComma)
        })

    return computeNeighborPositions(position, jiNotationLevelSymbolPositions)
}

export {
    computeBoundedSymbolClassPositions,
}
