import { Integer, Rank } from "../../../general"
import { RANKS } from "../bound"
import { EventAnalysis } from "../history"
import { EventConsolidation } from "./types"

const computeInitialEventConsolidation = (eventAnalysis: EventAnalysis): EventConsolidation => ({
    jiNotationLevel: eventAnalysis.jiNotationLevel,
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
