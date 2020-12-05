import {JiNotationBoundClassEntry, JiNotationLevelId, JI_NOTATION_BOUND_CLASS_ENTRIES} from "@sagittal/system"
import {computeBoundedCommaClassPositions} from "../../boundedPositions"
import {computePositionCommaClassId} from "./positionCommaClassId"
import {BoundedCommaClassIdPairs} from "./types"

const computeJiNotationLevelBoundedCommaClassIds = (
    [boundClassId, {pitch, jiNotationLevels}]: JiNotationBoundClassEntry,
): BoundedCommaClassIdPairs =>
    jiNotationLevels.reduce(
        (
            boundedCommaClassIdPairs: BoundedCommaClassIdPairs,
            jiNotationLevel: JiNotationLevelId,
        ): BoundedCommaClassIdPairs => ({
            ...boundedCommaClassIdPairs,
            [jiNotationLevel]: computeBoundedCommaClassPositions(pitch, jiNotationLevel)
                .map(computePositionCommaClassId),
        }),
        {boundClassId},
    )

const BOUNDED_COMMA_CLASS_ID_PAIRS: BoundedCommaClassIdPairs[] =
    JI_NOTATION_BOUND_CLASS_ENTRIES.map(computeJiNotationLevelBoundedCommaClassIds)

export {
    computeJiNotationLevelBoundedCommaClassIds,
    BOUNDED_COMMA_CLASS_ID_PAIRS,
}
