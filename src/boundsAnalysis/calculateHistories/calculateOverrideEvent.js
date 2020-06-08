const {calculateBoundNextLevel} = require("../utilities/calculateBoundNextLevel")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")
const {calculateBoundedCommaSymbols} = require("../data/calculateBoundedCommaSymbols")

const calculateOverrideEvent = (level, bound) => {
    const nextLevel = calculateBoundNextLevel(bound, level)
    const reinitializedPosition = calculateInitialPosition(bound, nextLevel)
    const [lesserBoundedCommaSymbol, greaterBoundedCommaSymbol] = calculateBoundedCommaSymbols(bound.position, nextLevel)

    return {
        level,
        type: "OVERRIDE",
        name: `guaranteed between ${lesserBoundedCommaSymbol} and ${greaterBoundedCommaSymbol} at the ${nextLevel} level, to re-initialize if necessary`,
        position: reinitializedPosition,
    }
}

module.exports = {
    calculateOverrideEvent,
}
