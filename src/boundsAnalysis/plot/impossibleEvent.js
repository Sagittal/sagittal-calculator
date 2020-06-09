const {MAXIMUM_POSITION} = require("../data/intervals")
const {computePositionComma} = require("../data/positionComma")
const {presentNumber} = require("../present/number")

const computeImpossibleEvent = (position, level, [lesserBoundedCommaPosition, greaterBoundedCommaPosition]) => {
    const presentedGreaterBoundedCommaPosition = presentNumber(greaterBoundedCommaPosition || MAXIMUM_POSITION)
    const presentedLesserBoundedCommaPosition = presentNumber(lesserBoundedCommaPosition)

    const lesserCommaSymbol = lesserBoundedCommaPosition ? computePositionComma(lesserBoundedCommaPosition).symbol : "the minimum position"
    const greaterCommaSymbol = greaterBoundedCommaPosition ? computePositionComma(greaterBoundedCommaPosition).symbol : "the maximum position"

    return {
        level,
        type: "IMPOSSIBLE",
        name: `not between ${lesserCommaSymbol} @${presentedLesserBoundedCommaPosition} and ${greaterCommaSymbol} @${presentedGreaterBoundedCommaPosition} at the ${level} level`,
        position,
    }
}

module.exports = {
    computeImpossibleEvent,
}
