import { CentsPosition } from "../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS, SizeCategoryBound } from "../../../sagittal"
import { computeInaMidpoints } from "./inaMidpoints"
import { computeJiNotationLevelCommaMeans } from "./levelCommaMeans"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "./sizeCategoryBounds"
import { CommaMean, EventType, InaMidpoint, SnappablePosition } from "./types"

const computeSnappablePositions = <T extends CentsPosition>(
    computeLevelSnappablePositions: (jiNotationLevel: JiNotationLevel) => T[],
): Record<JiNotationLevel, T[]> =>
    JI_NOTATION_LEVELS.reduce(
        (
            snappablePositions: Record<JiNotationLevel, T[]>,
            jiNotationLevel: JiNotationLevel,
        ): Record<JiNotationLevel, T[]> =>
            ({
                ...snappablePositions,
                [ jiNotationLevel ]: computeLevelSnappablePositions(jiNotationLevel),
            }),
        {} as Record<JiNotationLevel, T[]>,
    )

const INA_MIDPOINTS: Record<JiNotationLevel, InaMidpoint[]> =
    computeSnappablePositions(computeInaMidpoints)
const JI_NOTATION_LEVELS_COMMA_MEANS: Record<JiNotationLevel, CommaMean[]> =
    computeSnappablePositions(computeJiNotationLevelCommaMeans)
const JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS: Record<JiNotationLevel, SizeCategoryBound[]> =
    computeSnappablePositions(computeSizeCategoryBoundsWithinMaximumPosition)

const EVENT_TYPE_SNAPPABLE_POSITIONS: Record<EventType, Record<JiNotationLevel, SnappablePosition[]>> = {
    [ EventType.INA_MIDPOINT ]: INA_MIDPOINTS,
    [ EventType.SIZE_CATEGORY_BOUND ]: JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    [ EventType.COMMA_MEAN ]: JI_NOTATION_LEVELS_COMMA_MEANS,
}

export {
    INA_MIDPOINTS,
    JI_NOTATION_LEVELS_COMMA_MEANS,
    JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    EVENT_TYPE_SNAPPABLE_POSITIONS,
}
