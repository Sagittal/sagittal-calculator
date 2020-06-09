const {computeBoundNextLevel} = require("./boundNextLevel")
const {computeInitialPosition} = require("../data/initialPosition")
const {computeBoundedCommaSymbols} = require("../data/boundedCommaSymbols")

const computeOverrideEvent = (level, bound) => {
    const nextLevel = computeBoundNextLevel(bound, level)
    const reinitializedPosition = computeInitialPosition(bound, nextLevel)
    const [lesserBoundedCommaSymbol, greaterBoundedCommaSymbol] = computeBoundedCommaSymbols(bound.position, nextLevel)

    return {
        level,
        type: "OVERRIDE",
        name: `guaranteed between ${lesserBoundedCommaSymbol} and ${greaterBoundedCommaSymbol || "the maximum position"} at the ${nextLevel} level, to re-initialize if necessary`,
        position: reinitializedPosition,
    }
}

module.exports = {
    computeOverrideEvent,
}
