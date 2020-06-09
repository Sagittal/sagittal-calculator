const {LEVELS_COMMAS} = require("./levels")
const {computeNeighborPositions} = require("./neighborPositions")

const computeBoundedCommaPositions = (position, level) => {
    const levelCommas = LEVELS_COMMAS[level]

    const levelCommaPositions = levelCommas.map(levelComma => levelComma.position)

    return computeNeighborPositions(position, levelCommaPositions)
}

module.exports = {
    computeBoundedCommaPositions,
}
