import { Integer, Rank } from "../../../general"
import { RANKS } from "../analyzeBound"
import { AnalyzedEvent } from "../analyzedHistory"
import { ConsolidatedEvent } from "./types"

const computeInitialConsolidatedEvent = (analyzedEvent: AnalyzedEvent): ConsolidatedEvent => ({
    level: analyzedEvent.level,
    type: analyzedEvent.type,
    name: analyzedEvent.name,
    cents: analyzedEvent.cents,
    exact: analyzedEvent.exact,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    nextEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length - 1 as Integer & Rank<AnalyzedEvent>,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length - 1 as Integer & Rank<AnalyzedEvent>,
})

export {
    computeInitialConsolidatedEvent,
}
