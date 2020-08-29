import { Integer, Rank } from "../../general"
import { RANKS } from "./ranks"
import { AnalyzedEvent, ConsolidatedEvent } from "./types"

const computeInitialConsolidatedEvent = (analyzedEvent: AnalyzedEvent): ConsolidatedEvent => ({
    level: analyzedEvent.level,
    type: analyzedEvent.type,
    name: analyzedEvent.name,
    cents: analyzedEvent.cents,
    exact: analyzedEvent.exact,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    nextEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length - 1 as Rank<AnalyzedEvent, Integer>,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length - 1 as Rank<AnalyzedEvent, Integer>,
})

export {
    computeInitialConsolidatedEvent,
}
