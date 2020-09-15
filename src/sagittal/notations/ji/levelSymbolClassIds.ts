import { Id } from "../../../general"
import { SymbolClass } from "../types"
import { isWithinJiNotationLevel } from "./isWithinLevel"
import { JI_NOTATION_LEVELS } from "./levels"
import { JI_NOTATION_SYMBOL_CLASSES } from "./symbolClasses"
import { JiNotationLevel, JiNotationSymbolClass } from "./types"

const computeJiNotationLevelSymbolClassIds = (jiNotationLevel: JiNotationLevel): Array<Id<SymbolClass>> =>
    JI_NOTATION_SYMBOL_CLASSES.filter((jiNotationSymbolClass: JiNotationSymbolClass): boolean => {
        return isWithinJiNotationLevel(jiNotationSymbolClass.introducingJiNotationLevel, jiNotationLevel)
    }).map((jiNotationSymbolClass: JiNotationSymbolClass): Id<SymbolClass> => jiNotationSymbolClass.id)

const JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS: Record<JiNotationLevel, Array<Id<SymbolClass>>> = JI_NOTATION_LEVELS.reduce(
    (
        jiNotationLevelSymbolClassIds: Record<JiNotationLevel, Array<Id<SymbolClass>>>,
        jiNotationLevel: JiNotationLevel,
    ): Record<JiNotationLevel, Array<Id<SymbolClass>>> =>
        ({
            ...jiNotationLevelSymbolClassIds,
            [ jiNotationLevel ]: computeJiNotationLevelSymbolClassIds(jiNotationLevel),
        }),
    {} as Record<JiNotationLevel, Array<Id<SymbolClass>>>,
)

export {
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    computeJiNotationLevelSymbolClassIds,
}
