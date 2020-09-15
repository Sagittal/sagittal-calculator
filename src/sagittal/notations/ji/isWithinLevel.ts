import { JI_NOTATION_LEVELS } from "./levels"
import { JiNotationLevel } from "./types"

const isWithinJiNotationLevel = (jiNotationLevel: JiNotationLevel, targetJiNotationLevel: JiNotationLevel): boolean =>
    JI_NOTATION_LEVELS.indexOf(jiNotationLevel) <= JI_NOTATION_LEVELS.indexOf(targetJiNotationLevel)

export {
    isWithinJiNotationLevel,
}
