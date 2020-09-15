import { CentsPosition } from "../../../general"
import { computeInaMidpoints, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../sagittal"
import { computeJiNotationLevelCommaMeans } from "./levelCommaMeans"
import { computeSizeCategoryBoundsWithinMaximumPosition } from "./sizeCategoryBounds"
import { EventType } from "./types"

const computeSnappablePositions = (
    computeLevelSnappablePositions: (jiNotationLevel: JiNotationLevel) => CentsPosition[],
): Record<JiNotationLevel, CentsPosition[]> =>
    JI_NOTATION_LEVELS.reduce(
        (
            snappablePositions: Record<JiNotationLevel, CentsPosition[]>,
            jiNotationLevel: JiNotationLevel,
        ): Record<JiNotationLevel, CentsPosition[]> =>
            ({
                ...snappablePositions,
                [ jiNotationLevel ]: computeLevelSnappablePositions(jiNotationLevel),
            }),
        {} as Record<JiNotationLevel, CentsPosition[]>,
    )

const INA_MIDPOINTS: Record<JiNotationLevel, CentsPosition[]> =
    computeSnappablePositions(computeInaMidpoints)
const JI_NOTATION_LEVELS_COMMA_MEANS: Record<JiNotationLevel, CentsPosition[]> =
    computeSnappablePositions(computeJiNotationLevelCommaMeans)
const JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS: Record<JiNotationLevel, CentsPosition[]> =
    computeSnappablePositions(computeSizeCategoryBoundsWithinMaximumPosition)

const EVENT_TYPE_SNAPPABLE_POSITIONS: Record<EventType, Record<JiNotationLevel, CentsPosition[]>> = {
    [ EventType.INA ]: INA_MIDPOINTS,
    [ EventType.SIZE ]: JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    [ EventType.MEAN ]: JI_NOTATION_LEVELS_COMMA_MEANS,
}

export {
    INA_MIDPOINTS,
    JI_NOTATION_LEVELS_COMMA_MEANS,
    JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS,
    EVENT_TYPE_SNAPPABLE_POSITIONS,
}
