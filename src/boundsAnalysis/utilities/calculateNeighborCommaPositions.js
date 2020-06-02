const {LEVEL_COMMAS} = require("../data/levels")
const {calculateNeighborPositions} = require("./calculateNeighborPositions")

const calculateNeighborCommaPositions = (position, level) => {
    const levelCommas = LEVEL_COMMAS[level]

    const levelCommaPositions = levelCommas.map(levelComma => levelComma.position)

    return calculateNeighborPositions(position, levelCommaPositions)
}

module.exports = {
    calculateNeighborCommaPositions,
}
