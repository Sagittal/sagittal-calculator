import { Id } from "../../../general"
import { SymbolClass } from "../types"
import { JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS } from "./levelSymbolClassIds"
import { JiNotationLevel } from "./types"

const getIntroducingJiNotationLevel = (jiNotationSymbolClassId: Id<SymbolClass>): JiNotationLevel =>
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.MEDIUM ].includes(jiNotationSymbolClassId) ?
        JiNotationLevel.MEDIUM :
        JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.HIGH ].includes(jiNotationSymbolClassId) ?
            JiNotationLevel.HIGH :
            JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.ULTRA ].includes(jiNotationSymbolClassId) ?
                JiNotationLevel.ULTRA :
                JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.EXTREME ].includes(jiNotationSymbolClassId) ?
                    JiNotationLevel.EXTREME :
                    JiNotationLevel.INSANE


export {
    getIntroducingJiNotationLevel,
}
