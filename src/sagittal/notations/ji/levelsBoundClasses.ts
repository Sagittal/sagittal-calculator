import { JI_NOTATION_BOUND_CLASSES } from "./boundClasses"
import { JI_NOTATION_LEVELS } from "./levels"
import { JiNotationBoundClass, JiNotationLevel } from "./types"

const JI_NOTATION_LEVELS_BOUND_CLASSES: Record<JiNotationLevel, JiNotationBoundClass[]> = JI_NOTATION_LEVELS.reduce(
    (
        jiNotationLevelBoundClasses: Record<JiNotationLevel, JiNotationBoundClass[]>,
        jiNotationLevel: JiNotationLevel,
    ): Record<JiNotationLevel, JiNotationBoundClass[]> =>
        ({
            ...jiNotationLevelBoundClasses,
            [ jiNotationLevel ]: JI_NOTATION_BOUND_CLASSES.filter(
                (jiNotationBoundClass: JiNotationBoundClass): boolean => {
                    return jiNotationBoundClass.jiNotationLevels.includes(jiNotationLevel)
                },
            ),
        }),
    {} as Record<JiNotationLevel, JiNotationBoundClass[]>,
)

export {
    JI_NOTATION_LEVELS_BOUND_CLASSES,
}
