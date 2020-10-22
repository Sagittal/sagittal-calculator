import {Id} from "../../../general"
import {CommaClass} from "../../ji"
import {JI_NOTATION_LEVELS_COMMA_CLASS_IDS} from "./levelCommaClassIds"
import {JI_NOTATION_LEVELS} from "./levels"
import {JiNotationLevel} from "./types"

const getIntroducingJiNotationLevel = (commaClassId: Id<CommaClass>): JiNotationLevel => {
    for (const jiNotationLevel of JI_NOTATION_LEVELS) {
        if (JI_NOTATION_LEVELS_COMMA_CLASS_IDS[jiNotationLevel].includes(commaClassId)) {
            return jiNotationLevel
        }
    }

    throw new Error(`Comma class ID ${commaClassId} does not appear in a JI notation level.`)
}

export {
    getIntroducingJiNotationLevel,
}
