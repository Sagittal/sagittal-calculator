import { Integer, Rank } from "../../../general"
import { EventType } from "../histories"
import { EventAnalysis } from "../history"
import { RANKS } from "../ranks"
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
    rankOfBestRankedMemberHistory: Object.keys(RANKS).length as Integer & Rank<EventType>,
    rankOfBestRankedEventInAnyMemberHistory: Object.keys(RANKS).length as Integer & Rank<EventType>,
})

export {
    computeInitialEventConsolidation,
}
