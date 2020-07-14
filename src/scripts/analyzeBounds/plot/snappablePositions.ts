import { EnumHash, Position } from "../../../general"
import { computeInaMidpoints, computeLevelCommaMeans, computeSizeCategoryBounds, Level, LEVELS } from "../../../notations"
import { EventType } from "../types"

const computeSnappablePositions = (computeLevelSnappablePositions: (level: Level) => Position[]): EnumHash<Level, Position[]> =>
    LEVELS.reduce(
        (snappablePositions, level) =>
            ({
                ...snappablePositions,
                [ level ]: computeLevelSnappablePositions(level),
            }),
        {} as EnumHash<Level, Position[]>,
    )

const INA_MIDPOINTS: EnumHash<Level, Position[]> = computeSnappablePositions(computeInaMidpoints)
const LEVELS_COMMA_MEANS: EnumHash<Level, Position[]> = computeSnappablePositions(computeLevelCommaMeans)
const LEVELS_SIZE_CATEGORY_BOUNDS: EnumHash<Level, Position[]> = computeSnappablePositions(computeSizeCategoryBounds)

const EVENT_TYPE_SNAPPABLE_POSITIONS: EnumHash<EventType, EnumHash<Level, Position[]>> = {
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
