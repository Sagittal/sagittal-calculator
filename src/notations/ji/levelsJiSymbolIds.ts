import { Id } from "../../general"
import { JI_SYMBOLS } from "./jiSymbols"
import { LEVELS } from "./levels"
import { JiSymbol, Level } from "./types"

const computeIsWithinLevel = (level: Level, targetLevel: Level): boolean =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const computeLevelJiSymbolIds = (level: Level): Array<Id<JiSymbol>> =>
    JI_SYMBOLS.filter(symbol => computeIsWithinLevel(symbol.introducingLevel, level)).map(symbol => symbol.id)

const LEVELS_SYMBOL_IDS: Record<Level, Array<Id<JiSymbol>>> = LEVELS.reduce(
    (levelSymbols, level: Level) =>
        ({
            ...levelSymbols,
            [ level ]: computeLevelJiSymbolIds(level),
        }),
    {} as Record<Level, Array<Id<JiSymbol>>>,
)

export {
    LEVELS_SYMBOL_IDS,
    computeIsWithinLevel,
    computeLevelJiSymbolIds,
}
