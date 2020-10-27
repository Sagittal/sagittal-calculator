import {JI_NOTATION_LEVELS} from "./levels"
import {JiNotationLevelId} from "./types"

const isWithinJiNotationLevel = (
    jiNotationLevel: JiNotationLevelId,
    targetJiNotationLevel: JiNotationLevelId,
): boolean =>
    JI_NOTATION_LEVELS.indexOf(jiNotationLevel) <= JI_NOTATION_LEVELS.indexOf(targetJiNotationLevel)

export {
    isWithinJiNotationLevel,
}
