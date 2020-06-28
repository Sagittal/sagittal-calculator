const {LEVELS_SYMBOLS} = require("./levelsSymbols")
const {computeNeighborPositionIndices} = require("./neighborPositionIndices")

const computeBoundedSymbols = (position, level) => {
    const levelSymbols = LEVELS_SYMBOLS[level]

    const levelSymbolPositions = levelSymbols.map(levelSymbol => levelSymbol.primaryComma.position)

    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, levelSymbolPositions)

    return [
        levelSymbols[lesserNeighborPositionIndex] ? levelSymbols[lesserNeighborPositionIndex].ascii : "",
        levelSymbols[greaterNeighborPositionIndex] ? levelSymbols[greaterNeighborPositionIndex].ascii : "",
    ]
}

module.exports = {
    computeBoundedSymbols,
}
