import { SYMBOLS } from "./symbols"
import { LEVELS } from "./levels"
import { Level, SagittalSymbol } from "./types"
import { EnumHash } from "../../utilities/types"

const computeIsWithinLevel = (level: Level, targetLevel: Level): boolean =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const computeLevelSymbols = (level: Level): SagittalSymbol[] =>
    SYMBOLS.filter(symbol => computeIsWithinLevel(symbol.introducingLevel, level))

const LEVELS_SYMBOLS: EnumHash<Level, SagittalSymbol[]> = LEVELS.reduce(
    (levelSymbols, level: Level) => {
        return {
            ...levelSymbols,
            [ level ]: computeLevelSymbols(level),
        }
    },
    {} as EnumHash<Level, SagittalSymbol[]>,
)

export {
    LEVELS_SYMBOLS,
    computeIsWithinLevel,
    computeLevelSymbols,
}
