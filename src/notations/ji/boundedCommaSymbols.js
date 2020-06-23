const {LEVELS_COMMAS} = require("./levelsCommas")
const {computeNeighborPositionIndices} = require("./neighborPositionIndices")

const computeBoundedCommaSymbols = (position, level) => {
    const levelCommas = LEVELS_COMMAS[level]

    const levelCommaPositions = levelCommas.map(levelComma => levelComma.position)

    const [lesserNeighborPositionIndex, greaterNeighborPositionIndex] = computeNeighborPositionIndices(position, levelCommaPositions)

    return [
        levelCommas[lesserNeighborPositionIndex] ? levelCommas[lesserNeighborPositionIndex].ascii : "",
        levelCommas[greaterNeighborPositionIndex] ? levelCommas[greaterNeighborPositionIndex].ascii : "",
    ]
}

module.exports = {
    computeBoundedCommaSymbols,
}
