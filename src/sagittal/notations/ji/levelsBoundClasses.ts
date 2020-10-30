import {JI_NOTATION_BOUND_CLASSES} from "./boundClasses"
import {JI_NOTATION_LEVELS} from "./levels"
import {JiNotationBoundClass, JiNotationLevelId} from "./types"

// TODO: POST-NOTATION-GENERATION: JI NOTATION CLEAN-UP
//  Here's an example of a thing I want to become outmoded after notation generation

const JI_NOTATION_LEVELS_BOUND_CLASSES: Record<JiNotationLevelId, JiNotationBoundClass[]> = JI_NOTATION_LEVELS.reduce(
    (
        jiNotationLevelBoundClasses: Record<JiNotationLevelId, JiNotationBoundClass[]>,
        jiNotationLevel: JiNotationLevelId,
    ): Record<JiNotationLevelId, JiNotationBoundClass[]> =>
        ({
            ...jiNotationLevelBoundClasses,
            [jiNotationLevel]: Object.values(JI_NOTATION_BOUND_CLASSES).filter(
                (jiNotationBoundClass: JiNotationBoundClass): boolean => {
                    return jiNotationBoundClass.jiNotationLevels.includes(jiNotationLevel)
                },
            ),
        }),
    {} as Record<JiNotationLevelId, JiNotationBoundClass[]>,
)

export {
    JI_NOTATION_LEVELS_BOUND_CLASSES,
}
