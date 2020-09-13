import { Id } from "../../../general"
import { isWithinLevel } from "./isWithinLevel"
import { JI_SYMBOLS } from "./jiSymbols"
import { LEVELS } from "./levels"
import { JiSymbol, Level } from "./types"

const computeLevelJiSymbolIds = (level: Level): Array<Id<JiSymbol>> =>
    JI_SYMBOLS.filter((jiSymbol: JiSymbol): boolean => {
        return isWithinLevel(jiSymbol.introducingLevel, level)
    }).map((jiSymbol: JiSymbol): Id<JiSymbol> => jiSymbol.id)

const LEVELS_SYMBOL_IDS: Record<Level, Array<Id<JiSymbol>>> = LEVELS.reduce(
    (levelSymbols: Record<Level, Array<Id<JiSymbol>>>, level: Level): Record<Level, Array<Id<JiSymbol>>> =>
        ({
            ...levelSymbols,
            [ level ]: computeLevelJiSymbolIds(level),
        }),
    {} as Record<Level, Array<Id<JiSymbol>>>,
)

export {
    LEVELS_SYMBOL_IDS,
    computeLevelJiSymbolIds,
}
