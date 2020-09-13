import { CentsPosition } from "../../../general"
import { computeInaMidpoints, Level, LEVELS } from "../../../sagittal"
import { computeLevelCommaMeans } from "./levelCommaMeans"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "./sizeCategoryBounds"
import { EventType } from "./types"

const computeSnappablePositions = (
    computeLevelSnappablePositions: (level: Level) => CentsPosition[],
): Record<Level, CentsPosition[]> =>
    LEVELS.reduce(
        (snappablePositions: Record<Level, CentsPosition[]>, level: Level): Record<Level, CentsPosition[]> =>
            ({
                ...snappablePositions,
                [ level ]: computeLevelSnappablePositions(level),
            }),
        {} as Record<Level, CentsPosition[]>,
    )

const INA_MIDPOINTS: Record<Level, CentsPosition[]> =
    computeSnappablePositions(computeInaMidpoints)
const LEVELS_COMMA_MEANS: Record<Level, CentsPosition[]> =
    computeSnappablePositions(computeLevelCommaMeans)
const LEVELS_SIZE_CATEGORY_BOUNDS: Record<Level, CentsPosition[]> =
    computeSnappablePositions(computeSizeCategoryBoundsWithinMaximumPosition)

const EVENT_TYPE_SNAPPABLE_POSITIONS: Record<EventType, Record<Level, CentsPosition[]>> = {
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
