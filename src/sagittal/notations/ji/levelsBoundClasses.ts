import {JI_NOTATION_BOUND_CLASSES} from "./boundClasses"
import {JI_NOTATION_LEVELS} from "./levels"
import {JiNotationBoundClass, JiNotationLevel} from "./types"

// TODO: JI NOTATION, AFTER NOTATION GENERATION
//  Here's an example of a thing I want to become outmoded after notation generation

const JI_NOTATION_LEVELS_BOUND_CLASSES: Record<JiNotationLevel, JiNotationBoundClass[]> = JI_NOTATION_LEVELS.reduce(
    (
        jiNotationLevelBoundClasses: Record<JiNotationLevel, JiNotationBoundClass[]>,
        jiNotationLevel: JiNotationLevel,
    ): Record<JiNotationLevel, JiNotationBoundClass[]> =>
        ({
            ...jiNotationLevelBoundClasses,
            [jiNotationLevel]: Object.values(JI_NOTATION_BOUND_CLASSES).filter(
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
