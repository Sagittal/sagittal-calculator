const {MAXIMUM_POSITION} = require("./intervals")
const {calculateBoundedCommaPositions} = require("./calculateBoundedCommaPositions")

const calculateInitialPosition = (bound, level) => {
    const {position, levels} = bound
    const initialLevel = level || levels[0]
    const [lesserBoundedCommaPosition, greaterBoundedCommaPosition] = calculateBoundedCommaPositions(position, initialLevel)

    return greaterBoundedCommaPosition ? (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 : MAXIMUM_POSITION // TODO: INITIAL type event should have a name and it should be comma mean style?
}

module.exports = {
    calculateInitialPosition,
}
