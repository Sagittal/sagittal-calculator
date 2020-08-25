import { Position } from "../../../general"
import {
    computeInaMidpoints,
    computeLevelCommaMeans,
    computeSizeCategoryBoundsWithinMaximumPosition,
    Level,
    LEVELS,
} from "../../../notations"
import { EventType } from "../types"

const computeSnappablePositions = (computeLevelSnappablePositions: (level: Level) => Position[]): Record<Level, Position[]> =>
    LEVELS.reduce(
        (snappablePositions, level) =>
            ({
                ...snappablePositions,
                [ level ]: computeLevelSnappablePositions(level),
            }),
        {} as Record<Level, Position[]>,
    )

const INA_MIDPOINTS: Record<Level, Position[]> = computeSnappablePositions(computeInaMidpoints)
const LEVELS_COMMA_MEANS: Record<Level, Position[]> = computeSnappablePositions(computeLevelCommaMeans)
const LEVELS_SIZE_CATEGORY_BOUNDS: Record<Level, Position[]> = computeSnappablePositions(computeSizeCategoryBoundsWithinMaximumPosition)

const EVENT_TYPE_SNAPPABLE_POSITIONS: Record<EventType, Record<Level, Position[]>> = {
    [ EventType.INA ]: INA_MIDPOINTS,
    [ EventType.SIZE ]: LEVELS_SIZE_CATEGORY_BOUNDS,
    [ EventType.MEAN ]: LEVELS_COMMA_MEANS,
}

export {
    INA_MIDPOINTS,
    LEVELS_COMMA_MEANS,
    LEVELS_SIZE_CATEGORY_BOUNDS,
    EVENT_TYPE_SNAPPABLE_POSITIONS,
}
