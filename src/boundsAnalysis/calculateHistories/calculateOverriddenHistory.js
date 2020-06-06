const {calculateBoundPreviousLevel} = require("../utilities/calculateBoundPreviousLevel")
const {calculateInitialPosition} = require("../data/calculateInitialPosition")
const {RANKS} = require("./calculateRank")

const calculateOverriddenHistory = (bound, level) => {
    const reinitializedPosition = calculateInitialPosition(bound, level)
    const previousLevel = calculateBoundPreviousLevel(bound, level)

    return {
        position: reinitializedPosition,
        rank: 7,
        events: [
            {
                level: previousLevel,
                type: "OVERRIDE",
                name: "OVERRIDE",
                position: reinitializedPosition,
                rank: RANKS["OVERRIDE"],
            },
        ],
    }
}

module.exports = {
    calculateOverriddenHistory,
}
