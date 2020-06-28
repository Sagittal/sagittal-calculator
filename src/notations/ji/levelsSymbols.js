const {SYMBOLS} = require("./symbols")
const {LEVELS} = require("./levels")

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

module.exports = {
    LEVELS_SYMBOLS,
    computeIsWithinLevel,
    computeLevelSymbols,
}
