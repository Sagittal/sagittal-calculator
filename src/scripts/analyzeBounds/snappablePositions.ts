import { computeInaMidpoints } from "../../notations/ji/inaMidpoints"
import { computeLevelCommaMeans } from "../../notations/ji/levelCommaMeans"
import { computeSizeCategoryBounds } from "../../notations/ji/sizeCategoryBounds"
import { LEVELS } from "../../notations/ji/levels"
import { EventType, SnappablePosition } from "./types"
import { Level } from "../../notations/ji/types"
import { EnumHash } from "../../utilities/types"

const computeSnappablePositions = (computeLevelSnappablePositions: (level: Level) => SnappablePosition[]): EnumHash<Level, SnappablePosition[]> => {
    return LEVELS.reduce(
        (snappablePositions, level) => {
            return {
                ...snappablePositions,
                [ level ]: computeLevelSnappablePositions(level),
            }
        },
        {} as EnumHash<Level, SnappablePosition[]>,
    )
}

const INA_MIDPOINTS: EnumHash<Level, SnappablePosition[]> = computeSnappablePositions(computeInaMidpoints)
const LEVELS_COMMA_MEANS: EnumHash<Level, SnappablePosition[]> = computeSnappablePositions(computeLevelCommaMeans)
const LEVELS_SIZE_CATEGORY_BOUNDS: EnumHash<Level, SnappablePosition[]> = computeSnappablePositions(computeSizeCategoryBounds)

const EVENT_TYPE_SNAPPABLE_POSITIONS: EnumHash<EventType, EnumHash<Level, SnappablePosition[]>> = {
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
