const {MAXIMUM_POSITION} = require("./intervals")
const {computeBoundedCommaPositions} = require("./boundedCommaPositions")

const computeInitialPosition = (bound, level) => {
    const {position, levels} = bound
    const initialLevel = level || levels[0]
    const [lesserBoundedCommaPosition, greaterBoundedCommaPosition] = computeBoundedCommaPositions(position, initialLevel)

    return greaterBoundedCommaPosition ? (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 : MAXIMUM_POSITION
}

module.exports = {
    computeInitialPosition,
}
