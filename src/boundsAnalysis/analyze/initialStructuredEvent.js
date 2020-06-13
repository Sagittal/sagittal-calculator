const {RANKS} = require("../data/ranks")

const computeInitialStructuredEvent = analyzedEvent => ({
    level: analyzedEvent.level,
    type: analyzedEvent.type,
    name: analyzedEvent.name,
    position: analyzedEvent.position,
    exact: analyzedEvent.exact,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    nextEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length - 1,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length - 1,
})

module.exports = {
    computeInitialStructuredEvent,
}
