const {calculateBoundPreviousLevel} = require("../utilities/calculateBoundPreviousLevel")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")
const {calculateBoundedCommaSymbols} = require("../data/calculateBoundedCommaSymbols")

const calculateOverriddenHistory = (bound, level) => {
    const reinitializedPosition = calculateInitialPosition(bound, level)
    const previousLevel = calculateBoundPreviousLevel(bound, level)

    const [lesserBoundedCommaSymbol, greaterBoundedCommaSymbol] = calculateBoundedCommaSymbols(bound.position, level)

    return [
        {
            level: previousLevel,
            type: "OVERRIDE",
            name: `overridden to stay within ${lesserBoundedCommaSymbol} and ${greaterBoundedCommaSymbol} at the ${level} level`,
            position: reinitializedPosition,
        },
    ]
}

module.exports = {
    calculateOverriddenHistory,
}
