const {calculateBoundPreviousLevel} = require("../utilities/calculateBoundPreviousLevel")

const calculateOverriddenHistory = (bound, level) => {
    const {position} = bound
    const previousLevel = calculateBoundPreviousLevel(bound, level)

    return {
        position,
        rank: 7,
        events: [
            {
                level: previousLevel,
                type: "override",
                name: "override",
                position,
                rank: 7,
            },
        ],
    }
}

module.exports = {
    calculateOverriddenHistory,
}
