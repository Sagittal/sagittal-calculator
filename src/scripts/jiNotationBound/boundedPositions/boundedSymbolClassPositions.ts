import { Id, Pitch } from "../../../general"
import { getPrimaryComma, JiNotationLevel, JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS, SymbolClass } from "../../../sagittal"
import { computeNeighborPositions } from "./neighborPositions"
import { BoundedSymbolClassPositions } from "./types"

const computeBoundedSymbolClassPositions = (
    position: Pitch,
    jiNotationLevel: JiNotationLevel,
): BoundedSymbolClassPositions => {
    const jiNotationLevelSymbolClassIds: Array<Id<SymbolClass>> = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelSymbolPositions: Pitch[] = jiNotationLevelSymbolClassIds
        .map((jiNotationLevelSymbolClassId: Id<SymbolClass>): Pitch => {
            return getPrimaryComma(jiNotationLevelSymbolClassId)
        })

    return computeNeighborPositions(position, jiNotationLevelSymbolPositions) as BoundedSymbolClassPositions
}

export {
    computeBoundedSymbolClassPositions,
}
