import { BoundType, JiNotationLevel, JI_NOTATION_LEVELS, SizeCategoryBound } from "../../../sagittal"
import { computeInaMidpoints } from "./inaMidpoints"
import { computeJiNotationLevelCommaMeans } from "./levelCommaMeans"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "./sizeCategoryBounds"
import { BoundPosition, CommaMean, InaMidpoint } from "./types"

const computeBoundPositions = <T extends BoundPosition>(
    computeLevelSnappablePositions: (jiNotationLevel: JiNotationLevel) => T[],
): Record<JiNotationLevel, T[]> =>
    JI_NOTATION_LEVELS.reduce(
        (
            boundPositions: Record<JiNotationLevel, T[]>,
            jiNotationLevel: JiNotationLevel,
        ): Record<JiNotationLevel, T[]> =>
            ({
                ...boundPositions,
                [ jiNotationLevel ]: computeLevelSnappablePositions(jiNotationLevel),
            }),
        {} as Record<JiNotationLevel, T[]>,
    )

const INA_MIDPOINTS: Record<JiNotationLevel, InaMidpoint[]> =
    computeBoundPositions(computeInaMidpoints)
const JI_NOTATION_LEVELS_COMMA_MEANS: Record<JiNotationLevel, CommaMean[]> =
    computeBoundPositions(computeJiNotationLevelCommaMeans)
const JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS: Record<JiNotationLevel, SizeCategoryBound[]> =
    computeBoundPositions(computeSizeCategoryBoundsWithinMaximumPosition)

const BOUND_POSITIONS_BY_BOUND_TYPE: Record<BoundType, Record<JiNotationLevel, BoundPosition[]>> = {
    [ BoundType.INA_MIDPOINT ]: INA_MIDPOINTS,
    [ BoundType.SIZE_CATEGORY_BOUND ]: JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    [ BoundType.COMMA_MEAN ]: JI_NOTATION_LEVELS_COMMA_MEANS,
}

export {
    INA_MIDPOINTS,
    JI_NOTATION_LEVELS_COMMA_MEANS,
    JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    BOUND_POSITIONS_BY_BOUND_TYPE,
}
