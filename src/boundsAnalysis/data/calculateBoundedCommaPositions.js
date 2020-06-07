const {LEVEL_COMMAS} = require("./levels")
const {calculateNeighborPositions} = require("../utilities/calculateNeighborPositions")

const calculateBoundedCommaPositions = (position, level) => {
    const levelCommas = LEVEL_COMMAS[level]

    const levelCommaPositions = levelCommas.map(levelComma => levelComma.position)

    return calculateNeighborPositions(position, levelCommaPositions)
}

module.exports = {
    calculateBoundedCommaPositions,
}
