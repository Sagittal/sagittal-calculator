import {CommaMean} from "@sagittal/general"
import {
    BoundType,
    InaMidpoint,
    JiNotationBound,
    JiNotationLevelId,
    JI_NOTATION_LEVELS,
    SizeCategoryBound,
} from "@sagittal/system"
import {computeInaMidpoints} from "./inaMidpoints"
import {computeJiNotationLevelCommaMeans} from "./levelCommaMeans"
import {computeSizeCategoryBoundsUpToHalfApotome} from "./sizeCategoryBounds"

const computeBoundPositions = <T extends JiNotationBound>(
    computeLevelBoundPositions: (jiNotationLevel: JiNotationLevelId) => T[],
): Record<JiNotationLevelId, T[]> =>
    JI_NOTATION_LEVELS.reduce(
        (
            bounds: Record<JiNotationLevelId, T[]>,
            jiNotationLevel: JiNotationLevelId,
        ): Record<JiNotationLevelId, T[]> =>
            ({
                ...bounds,
                [jiNotationLevel]: computeLevelBoundPositions(jiNotationLevel),
            }),
        {} as Record<JiNotationLevelId, T[]>,
    )

const INA_MIDPOINTS: Record<JiNotationLevelId, InaMidpoint[]> =
    computeBoundPositions(computeInaMidpoints)
const JI_NOTATION_LEVELS_COMMA_MEANS: Record<JiNotationLevelId, CommaMean[]> =
    computeBoundPositions(computeJiNotationLevelCommaMeans)
const JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS: Record<JiNotationLevelId, SizeCategoryBound[]> =
    computeBoundPositions(computeSizeCategoryBoundsUpToHalfApotome)

// These are not JiNotationBound*Class* because that'd mean they were actually in the notation;
// These are all just potential bounds for the notation from which to draw
const JI_NOTATION_BOUNDS_BY_TYPE: Record<BoundType, Record<JiNotationLevelId, JiNotationBound[]>> = {
    [BoundType.INA_MIDPOINT]: INA_MIDPOINTS,
    [BoundType.SIZE_CATEGORY_BOUND]: JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    [BoundType.COMMA_MEAN]: JI_NOTATION_LEVELS_COMMA_MEANS,
}

export {
    INA_MIDPOINTS,
    JI_NOTATION_LEVELS_COMMA_MEANS,
    JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    JI_NOTATION_BOUNDS_BY_TYPE,
}
