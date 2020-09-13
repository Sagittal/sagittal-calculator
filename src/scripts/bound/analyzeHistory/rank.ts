import { Integer, Rank } from "../../../general"
import { EventAnalysis } from "./analyzeEvents"

const computeRank = (eventAnalyses: EventAnalysis[]): Integer & Rank<EventAnalysis> => eventAnalyses.reduce(
    (rank: Integer & Rank<EventAnalysis>, eventAnalysis: EventAnalysis): Integer & Rank<EventAnalysis> =>
        rank > eventAnalysis.rank ? rank : eventAnalysis.rank,
    0 as Integer & Rank<EventAnalysis>,
)

export {
    computeRank,
}
