import { Id, Scamon } from "../../../general"
import { getPrimaryComma, JiNotationLevel, JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS, SymbolClass } from "../../../sagittal"
import { computeNeighborPositions } from "./neighborPositions"
import { BoundedSymbolClassPositions } from "./types"

const computeBoundedSymbolClassPositions = (
    position: Scamon,
    jiNotationLevel: JiNotationLevel,
): BoundedSymbolClassPositions => {
    const jiNotationLevelSymbolClassIds: Array<Id<SymbolClass>> = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelSymbolPositions: Scamon[] = jiNotationLevelSymbolClassIds
        .map((jiNotationLevelSymbolClassId: Id<SymbolClass>): Scamon => {
            return getPrimaryComma(jiNotationLevelSymbolClassId)
        })

    return computeNeighborPositions(position, jiNotationLevelSymbolPositions) as BoundedSymbolClassPositions
}

export {
    computeBoundedSymbolClassPositions,
}
