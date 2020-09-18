import { Integer, Rank } from "../../../general"
import { EventType } from "../histories"
import { RANKS } from "../ranks"
import { EventAnalysis } from "./events"

const computeRank = (eventAnalyses: EventAnalysis[]): Integer & Rank<EventType> =>
    eventAnalyses.reduce(
        (rank: Integer & Rank<EventType>, eventAnalysis: EventAnalysis): Integer & Rank<EventType> =>
            rank > eventAnalysis.rank ? rank : eventAnalysis.rank,
        RANKS[ EventType.INA_MIDPOINT ],
    )

export {
    computeRank,
}
