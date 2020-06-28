const {LEVELS_SYMBOLS} = require("./levelsSymbols")
const {computeNeighborPositions} = require("./neighborPositions")

const computeBoundedSymbolPositions = (position, level) => {
    const levelSymbols = LEVELS_SYMBOLS[level]

    const levelSymbolPositions = levelSymbols.map(levelSymbol => levelSymbol.primaryComma.position)

    return computeNeighborPositions(position, levelSymbolPositions)
}

module.exports = {
    computeBoundedSymbolPositions,
}
