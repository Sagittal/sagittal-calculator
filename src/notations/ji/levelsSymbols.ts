import { SYMBOLS } from "./symbols"
import { LEVELS } from "./levels"
import { Level, SagittalSymbol } from "./types"

const computeIsWithinLevel = (level: Level, targetLevel: Level): boolean =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const computeLevelSymbols = (level: Level): SagittalSymbol[] =>
    SYMBOLS.filter(symbol => computeIsWithinLevel(symbol.introducingLevel, level))

const LEVELS_SYMBOLS: { [key in Level]: SagittalSymbol[] } = LEVELS.reduce(
    (levelSymbols, level: Level) => {
        return {
            ...levelSymbols,
            [ level ]: computeLevelSymbols(level),
        }
    },
    {},
) as { [key in Level]: SagittalSymbol[] }

export {
    LEVELS_SYMBOLS,
    computeIsWithinLevel,
    computeLevelSymbols,
}
