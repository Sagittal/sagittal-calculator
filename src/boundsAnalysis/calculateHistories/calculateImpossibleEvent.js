const {MAXIMUM_POSITION} = require("../data/intervals")
const {calculateCommaFromPosition} = require("../data/calculateCommaFromPosition")
const {formatNumber} = require("../format/formatNumber")

const calculateImpossibleEvent = (position, level, [lesserBoundedCommaPosition, greaterBoundedCommaPosition]) => {
    const formattedGreaterBoundedCommaPosition = formatNumber(greaterBoundedCommaPosition || MAXIMUM_POSITION)
    const formattedLesserBoundedCommaPosition = formatNumber(lesserBoundedCommaPosition)

    const lesserCommaSymbol = lesserBoundedCommaPosition ? calculateCommaFromPosition(lesserBoundedCommaPosition).symbol : "the minimum position"
    const greaterCommaSymbol = greaterBoundedCommaPosition ? calculateCommaFromPosition(greaterBoundedCommaPosition).symbol : "the maximum position"

    return {
        level,
        type: "IMPOSSIBLE",
        name: `not between ${lesserCommaSymbol} @${formattedLesserBoundedCommaPosition} and ${greaterCommaSymbol} @${formattedGreaterBoundedCommaPosition} at the ${level} level`,
        position,
    }
}

module.exports = {
    calculateImpossibleEvent,
}
