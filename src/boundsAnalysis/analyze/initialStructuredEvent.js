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
    rankOfBestRankedMemberHistory: RANKS["IMPOSSIBLE"],
    rankOfBestRankedEventInAnyMemberHistory: RANKS["IMPOSSIBLE"],
})

module.exports = {
    computeInitialStructuredEvent,
}
