const {RANKS} = require("../data/ranks")

const calculateInitialStructuredEvent = analyzedEvent => {
    return {
        level: analyzedEvent.level,
        type: analyzedEvent.type,
        name: analyzedEvent.name,
        position: analyzedEvent.position,
        isPossibleHistoryMember: false,
        nextEvents: [],
        rankOfBestRankedMemberHistory: RANKS["IMPOSSIBLE"],
        rankOfBestRankedEventInAnyMemberHistory: RANKS["IMPOSSIBLE"],
    }
}

module.exports = {
    calculateInitialStructuredEvent,
}
