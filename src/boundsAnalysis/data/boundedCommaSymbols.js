const {LEVELS_COMMAS} = require("./levels")
const {computeNeighborPositionIndices} = require("./neighborPositionIndices")

const computeBoundedCommaSymbols = (position, level) => {
    const levelCommas = LEVELS_COMMAS[level]

    const levelCommaPositions = levelCommas.map(levelComma => levelComma.position)

    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, levelCommaPositions)

    return [
        levelCommas[lesserNeighborPositionIndex] ? levelCommas[lesserNeighborPositionIndex].symbol : "",
        levelCommas[greaterNeighborPositionIndex] ? levelCommas[greaterNeighborPositionIndex].symbol : "",
    ]
}

module.exports = {
    computeBoundedCommaSymbols,
}
