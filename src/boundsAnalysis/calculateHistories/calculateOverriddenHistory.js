const {calculateBoundPreviousLevel} = require("../utilities/calculateBoundPreviousLevel")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")

const calculateOverriddenHistory = (bound, level) => {
    const reinitializedPosition = calculateInitialPosition(bound, level)
    const previousLevel = calculateBoundPreviousLevel(bound, level)

    return {
        position: reinitializedPosition,
        rank: 7,
        events: [
            {
                level: previousLevel,
                type: "override",
                name: "override",
                position: reinitializedPosition,
                rank: 7,
            },
        ],
    }
}

module.exports = {
    calculateOverriddenHistory,
}
