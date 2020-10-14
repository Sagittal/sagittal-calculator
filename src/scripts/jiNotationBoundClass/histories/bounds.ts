import {
    BoundClass,
    BoundType,
    CommaMean,
    InaMidpoint,
    JiNotationLevel,
    JI_NOTATION_LEVELS,
    SizeCategoryBound,
} from "../../../sagittal"
import { computeInaMidpoints } from "./inaMidpoints"
import { computeJiNotationLevelCommaMeans } from "./levelCommaMeans"
import { computeSizeCategoryBoundsUpToHalfApotome } from "./sizeCategoryBounds"

const computeBoundPositions = <T extends BoundClass>(
    computeLevelBoundPositions: (jiNotationLevel: JiNotationLevel) => T[],
): Record<JiNotationLevel, T[]> =>
    JI_NOTATION_LEVELS.reduce(
        (
            bounds: Record<JiNotationLevel, T[]>,
            jiNotationLevel: JiNotationLevel,
        ): Record<JiNotationLevel, T[]> =>
            ({
                ...bounds,
                [ jiNotationLevel ]: computeLevelBoundPositions(jiNotationLevel),
            }),
        {} as Record<JiNotationLevel, T[]>,
    )

const INA_MIDPOINTS: Record<JiNotationLevel, InaMidpoint[]> =
    computeBoundPositions(computeInaMidpoints)
const JI_NOTATION_LEVELS_COMMA_MEANS: Record<JiNotationLevel, CommaMean[]> =
    computeBoundPositions(computeJiNotationLevelCommaMeans)
const JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS: Record<JiNotationLevel, SizeCategoryBound[]> =
    computeBoundPositions(computeSizeCategoryBoundsUpToHalfApotome)

// These are not JiNotationBoundClass because that means they're actually in the notation;
// These are all just potential bound classes for the notation from which to draw
const BOUND_CLASSES_BY_TYPE: Record<BoundType, Record<JiNotationLevel, BoundClass[]>> = {
    [ BoundType.INA_MIDPOINT ]: INA_MIDPOINTS,
    [ BoundType.SIZE_CATEGORY_BOUND ]: JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    [ BoundType.COMMA_MEAN ]: JI_NOTATION_LEVELS_COMMA_MEANS,
}

export {
    INA_MIDPOINTS,
    JI_NOTATION_LEVELS_COMMA_MEANS,
    JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    BOUND_CLASSES_BY_TYPE,
}
