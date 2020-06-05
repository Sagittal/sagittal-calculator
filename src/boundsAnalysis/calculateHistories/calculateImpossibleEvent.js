const {MAXIMUM_POSITION} = require("../data/intervals")
const {calculateCommaFromPosition} = require("../utilities/calculateCommaFromPosition")

const calculateImpossibleEvent = (position, level, [lesserNeighborCommaPosition, greaterNeighborCommaPosition]) => {
    const formattedGreaterNeighborCommaPosition = greaterNeighborCommaPosition ?
        greaterNeighborCommaPosition.toPrecision(5) :
        MAXIMUM_POSITION.toPrecision(5)

    const formattedLesserNeighborCommaPosition = lesserNeighborCommaPosition.toPrecision(5)

    const lesserCommaSymbol = lesserNeighborCommaPosition ? calculateCommaFromPosition(lesserNeighborCommaPosition).symbol : "the minimum position"
    const greaterCommaSymbol = greaterNeighborCommaPosition ? calculateCommaFromPosition(greaterNeighborCommaPosition).symbol : "the maximum position"

    return {
        level,
        type: "impossible",
        name: `not between ${lesserCommaSymbol} @${formattedLesserNeighborCommaPosition} and ${greaterCommaSymbol} @${formattedGreaterNeighborCommaPosition} at the ${level} level`,
        position,
        rank: 8,
    }
}

module.exports = {
    calculateImpossibleEvent,
}
