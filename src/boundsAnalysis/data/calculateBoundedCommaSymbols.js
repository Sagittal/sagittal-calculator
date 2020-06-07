const {LEVEL_COMMAS} = require("./levels")
const {calculateNeighborPositionIndices} = require("../utilities/calculateNeighborPositionIndices")

const calculateBoundedCommaSymbols = (position, level) => {
    const levelCommas = LEVEL_COMMAS[level]

    const levelCommaPositions = levelCommas.map(levelComma => levelComma.position)

    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = calculateNeighborPositionIndices(position, levelCommaPositions)

    return [
        levelCommas[lesserNeighborPositionIndex].symbol,
        levelCommas[greaterNeighborPositionIndex].symbol,
    ]
}

module.exports = {
    calculateBoundedCommaSymbols,
}
