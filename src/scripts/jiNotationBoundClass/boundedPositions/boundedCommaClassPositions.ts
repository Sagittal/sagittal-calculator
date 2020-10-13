import { Id, Scamon } from "../../../general"
import { CommaClass, getCommaClass, JiNotationLevel, JI_NOTATION_LEVELS_COMMA_CLASS_IDS } from "../../../sagittal"
import { computeNeighborPositions } from "./neighborPositions"
import { BoundedCommaClassPositions } from "./types"

const computeBoundedCommaClassPositions = (
    position: Scamon,
    jiNotationLevel: JiNotationLevel,
): BoundedCommaClassPositions => {
    const jiNotationLevelCommaClassIds: Array<Id<CommaClass>> = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelCommaClassPositions: Scamon[] = jiNotationLevelCommaClassIds
        .map((jiNotationLevelCommaClassId: Id<CommaClass>): Scamon => {
            return getCommaClass(jiNotationLevelCommaClassId).pitch
        })

    return computeNeighborPositions(position, jiNotationLevelCommaClassPositions) as BoundedCommaClassPositions
}

export {
    computeBoundedCommaClassPositions,
}
