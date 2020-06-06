const {MAXIMUM_POSITION} = require("../data/intervals")
const {calculateCommaFromPosition} = require("../data/calculateCommaFromPosition")
const {formatNumber} = require("../format/formatNumber")
const {RANKS} = require("./calculateRank")

const calculateImpossibleEvent = (position, level, [lesserNeighborCommaPosition, greaterNeighborCommaPosition]) => {
    const formattedGreaterNeighborCommaPosition = formatNumber(greaterNeighborCommaPosition || MAXIMUM_POSITION)
    const formattedLesserNeighborCommaPosition = formatNumber(lesserNeighborCommaPosition)

    const lesserCommaSymbol = lesserNeighborCommaPosition ? calculateCommaFromPosition(lesserNeighborCommaPosition).symbol : "the minimum position"
    const greaterCommaSymbol = greaterNeighborCommaPosition ? calculateCommaFromPosition(greaterNeighborCommaPosition).symbol : "the maximum position"

    return {
        level,
        type: "IMPOSSIBLE",
        name: `not between ${lesserCommaSymbol} @${formattedLesserNeighborCommaPosition} and ${greaterCommaSymbol} @${formattedGreaterNeighborCommaPosition} at the ${level} level`,
        position,
        rank: RANKS["IMPOSSIBLE"],
    }
}

module.exports = {
    calculateImpossibleEvent,
}
