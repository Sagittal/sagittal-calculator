import { Integer, Rank } from "../../../general"
import { RANKS } from "../analyzeBound"
import { EventAnalysis } from "../analyzeHistory"
import { EventConsolidation } from "./types"

const computeInitialEventConsolidation = (eventAnalysis: EventAnalysis): EventConsolidation => ({
    level: eventAnalysis.level,
    type: eventAnalysis.type,
    name: eventAnalysis.name,
    cents: eventAnalysis.cents,
    exact: eventAnalysis.exact,
    isPossibleHistoryMember: false,
    isBestPossibleHistoryMember: false,
    nextEvents: [],
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length - 1 as Integer & Rank<EventAnalysis>,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length - 1 as Integer & Rank<EventAnalysis>,
})

export {
    computeInitialEventConsolidation,
}
