const {MAXIMUM_POSITION} = require("../data/intervals")
const {calculateCommaFromPosition} = require("../utilities/calculateCommaFromPosition")

const calculateImpossibleEvent = (position, level, [lesserNeighborCommaPosition, greaterNeighborCommaPosition]) => {
    const formattedGreaterNeighborCommaPosition = greaterNeighborCommaPosition ?
        greaterNeighborCommaPosition.toPrecision(5) :
        MAXIMUM_POSITION.toPrecision(5) // TODO: standardize above/below and lesser/greater

    const formattedLesserNeighborCommaPosition = lesserNeighborCommaPosition.toPrecision(5) // TODO: preiciosn 5 plez

    const lesserCommaSymbol = calculateCommaFromPosition(lesserNeighborCommaPosition).symbol
    const greaterCommaSymbol = greaterNeighborCommaPosition ? calculateCommaFromPosition(greaterNeighborCommaPosition).symbol : 'the maximum position'
    // const nextBoundLevel = 3 // TODO: pretty much same thing you did with the previous level for bound

    return {
        level,
        type: "impossible",
        name: `not between ${lesserCommaSymbol} @${formattedLesserNeighborCommaPosition} and ${greaterCommaSymbol} @${formattedGreaterNeighborCommaPosition} at the ${level} level`,
        position,
    }
}

module.exports = {
    calculateImpossibleEvent,
}
