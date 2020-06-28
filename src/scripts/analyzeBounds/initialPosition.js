const {MAXIMUM_POSITION} = require("../../notations/ji/intervals")
const {computeBoundedSymbolPositions} = require("../../notations/ji/boundedSymbolPositions")

const computeInitialPosition = (bound, level) => {
    const {position, levels} = bound
    const initialLevel = level || levels[0]
    const [lesserBoundedCommaPosition, greaterBoundedCommaPosition] = computeBoundedSymbolPositions(position, initialLevel)

    return greaterBoundedCommaPosition ? (lesserBoundedCommaPosition + greaterBoundedCommaPosition) / 2 : MAXIMUM_POSITION
}

module.exports = {
    computeInitialPosition,
}
