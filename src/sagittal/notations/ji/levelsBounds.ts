import { JI_NOTATION_BOUNDS } from "./bounds"
import { JI_NOTATION_LEVELS } from "./levels"
import { JiNotationBound, JiNotationLevel } from "./types"

const JI_NOTATION_LEVELS_BOUNDS: Record<JiNotationLevel, JiNotationBound[]> = JI_NOTATION_LEVELS.reduce(
    (
        jiNotationLevelBounds: Record<JiNotationLevel, JiNotationBound[]>,
        jiNotationLevel: JiNotationLevel
    ): Record<JiNotationLevel, JiNotationBound[]> =>
        ({
            ...jiNotationLevelBounds,
            [ jiNotationLevel ]: JI_NOTATION_BOUNDS.filter((jiNotationBound: JiNotationBound): boolean => {
                return jiNotationBound.jiNotationLevels.includes(jiNotationLevel)
            }),
        }),
    {} as Record<JiNotationLevel, JiNotationBound[]>,
)

export {
    JI_NOTATION_LEVELS_BOUNDS,
}
