import { RANKS } from "./ranks"
import { AnalyzedEvent, ConsolidatedEvent, EventRank } from "./types"

const computeInitialConsolidatedEvent = (analyzedEvent: AnalyzedEvent): ConsolidatedEvent => ({
    level: analyzedEvent.level,
    type: analyzedEvent.type,
    name: analyzedEvent.name,
    cents: analyzedEvent.cents,
    exact: analyzedEvent.exact,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    nextEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length - 1 as EventRank,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length - 1 as EventRank,
})

export {
    computeInitialConsolidatedEvent,
}
