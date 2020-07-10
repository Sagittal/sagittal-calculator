import {SYMBOLS} from "./symbols"
import {LEVELS} from "./levels"

const computeIsWithinLevel = (level, targetLevel) =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

const computeLevelSymbols = level =>
    SYMBOLS.filter(symbol => computeIsWithinLevel(symbol.introducingLevel, level))

const LEVELS_SYMBOLS = LEVELS.reduce(
    (levelSymbols, level) => {
        return {
            ...levelSymbols,
            [level]: computeLevelSymbols(level),
        }
    },
    {},
)

export {
    LEVELS_SYMBOLS,
    computeIsWithinLevel,
    computeLevelSymbols,
}
