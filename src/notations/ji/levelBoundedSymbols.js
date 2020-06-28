const {computeBoundedSymbolPositions} = require("./boundedSymbolPositions")
const {computePositionSymbol} = require("./positionSymbol")
const {computeInaDistance} = require("./inaDistance")
const {BOUNDS} = require("./bounds")

const computeLevelBoundedSymbols = bound => {
    const {position, levels, id} = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedSymbols = computeBoundedSymbolPositions(position, level).map(position => computePositionSymbol(position))
            const levelBoundedSymbolsWithDistance = levelBoundedSymbols.map(symbol => {
                if (symbol) {
                    const distance = Math.abs(position - symbol.primaryComma.position)

                    return {
                        ...symbol,
                        distance,
                        inaDistance: computeInaDistance(distance, level),
                    }
                }
            })

            return {
                ...levels,
                [level]: levelBoundedSymbolsWithDistance,
            }
        },
        {
            id,
        },
    )
}

const LEVEL_BOUNDED_SYMBOLS = BOUNDS.map(computeLevelBoundedSymbols)

module.exports = {
    computeLevelBoundedSymbols,
    LEVEL_BOUNDED_SYMBOLS,
}
