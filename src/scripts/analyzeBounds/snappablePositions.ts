import { computeInaMidpoints } from "../../notations/ji/inaMidpoints"
import { computeLevelCommaMeans } from "../../notations/ji/levelCommaMeans"
import { computeSizeCategoryBounds } from "../../notations/ji/sizeCategoryBounds"
import { LEVELS } from "../../notations/ji/levels"
import { EventType, SnappablePosition } from "./types"
import { Level } from "../../notations/ji/types"

const computeSnappablePositions = (computeLevelSnappablePositions: (level: Level) => SnappablePosition[]): { [key in Level]: SnappablePosition[] } => {
    return LEVELS.reduce(
        (snappablePositions, level) => {
            return {
                ...snappablePositions,
                [ level ]: computeLevelSnappablePositions(level),
            }
        },
        {} as { [key in Level]: SnappablePosition[] }, // todo: should probably have a Map<Level, SnappablePosition[]> type.. or EnumMap? how did i do it in muiscal patternS.?:
    )
}

const INA_MIDPOINTS: { [key in Level]: SnappablePosition[] } = computeSnappablePositions(computeInaMidpoints)
const LEVELS_COMMA_MEANS: { [key in Level]: SnappablePosition[] } = computeSnappablePositions(computeLevelCommaMeans)
const LEVELS_SIZE_CATEGORY_BOUNDS: { [key in Level]: SnappablePosition[] } = computeSnappablePositions(computeSizeCategoryBounds)

const EVENT_TYPE_SNAPPABLE_POSITIONS: { [key in EventType]: { [key in Level]: SnappablePosition[] } } = {
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
