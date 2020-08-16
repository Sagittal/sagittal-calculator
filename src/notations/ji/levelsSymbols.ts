import { EnumHash } from "../../general"
import { LEVELS } from "./levels"
import { SYMBOLS } from "./symbols"
import { Level, JiSymbol } from "./types"

const computeIsWithinLevel = (level: Level, targetLevel: Level): boolean =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const computeLevelSymbols = (level: Level): JiSymbol[] =>
    SYMBOLS.filter(symbol => computeIsWithinLevel(symbol.introducingLevel, level))

const LEVELS_SYMBOLS: EnumHash<Level, JiSymbol[]> = LEVELS.reduce(
    (levelSymbols, level: Level) =>
        ({
            ...levelSymbols,
            [ level ]: computeLevelSymbols(level),
        }),
    {} as EnumHash<Level, JiSymbol[]>,
)

export {
    LEVELS_SYMBOLS,
    computeIsWithinLevel,
    computeLevelSymbols,
}
