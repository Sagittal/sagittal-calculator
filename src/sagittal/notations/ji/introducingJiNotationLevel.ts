import { Id } from "../../../general"
import { SymbolClass } from "../types"
import { JI_NOTATION_LEVELS } from "./levels"
import { JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS } from "./levelSymbolClassIds"
import { JiNotationLevel } from "./types"

const getIntroducingJiNotationLevel = (symbolClassId: Id<SymbolClass>): JiNotationLevel => {
    for (const jiNotationLevel of JI_NOTATION_LEVELS) {
        if (JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ].includes(symbolClassId)) {
            return jiNotationLevel
        }
    }

    throw new Error(`Symbol class ID ${symbolClassId} does not appear in a JI notation level.`)
}

export {
    getIntroducingJiNotationLevel,
}
