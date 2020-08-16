import { EnumHash } from "../../general"
import { LEVELS } from "./levels"
import { JI_SYMBOLS } from "./symbols"
import { JiSymbol, Level } from "./types"

const computeIsWithinLevel = (level: Level, targetLevel: Level): boolean =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const computeLevelSymbols = (level: Level): JiSymbol[] =>
    JI_SYMBOLS.filter(symbol => computeIsWithinLevel(symbol.introducingLevel, level))

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
