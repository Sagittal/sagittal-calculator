const {calculateBoundPreviousLevel} = require("../utilities/calculateBoundPreviousLevel")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const calculateOverriddenHistory = (bound, level) => {
    const reinitializedPosition = calculateInitialPosition(bound, level)
    const previousLevel = calculateBoundPreviousLevel(bound, level)

    return [
        {
            level: previousLevel,
            type: "OVERRIDE",
            name: "OVERRIDE",
            position: reinitializedPosition,
        },
    ]
}

module.exports = {
    calculateOverriddenHistory,
}
