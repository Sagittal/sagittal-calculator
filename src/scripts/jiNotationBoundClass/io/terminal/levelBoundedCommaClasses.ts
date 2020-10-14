import { JiNotationBoundClass, JiNotationLevel, JI_NOTATION_BOUND_CLASSES } from "../../../../sagittal"
import { computeBoundedCommaClassPositions } from "../../boundedPositions"
import { computePositionCommaClassId } from "./positionCommaClassId"
import { BoundedCommaClassIdPairs } from "./types"

const computeJiNotationLevelBoundedCommaClassIds = (
    { pitch, jiNotationLevels, id }: JiNotationBoundClass,
): BoundedCommaClassIdPairs =>
    jiNotationLevels.reduce(
        (
            boundedCommaClassIdPairs: BoundedCommaClassIdPairs,
            jiNotationLevel: JiNotationLevel
        ): BoundedCommaClassIdPairs => ({
            ...boundedCommaClassIdPairs,
            [ jiNotationLevel ]: computeBoundedCommaClassPositions(pitch, jiNotationLevel)
                .map(computePositionCommaClassId),
        }),
        { jiNotationBoundClassId: id },
    )

const BOUNDED_COMMA_CLASS_ID_PAIRS: BoundedCommaClassIdPairs[] =
    JI_NOTATION_BOUND_CLASSES.map(computeJiNotationLevelBoundedCommaClassIds)

export {
    computeJiNotationLevelBoundedCommaClassIds,
    BOUNDED_COMMA_CLASS_ID_PAIRS,
}
