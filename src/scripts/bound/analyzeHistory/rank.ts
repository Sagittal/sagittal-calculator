import { Integer, Rank } from "../../../general"
import { EventAnalysis } from "./analyzeEvents"

const computeRank = (eventAnalyses: EventAnalysis[]): Integer & Rank<EventAnalysis> => eventAnalyses.reduce(
    (rank, eventAnalysis) =>
        rank > eventAnalysis.rank ? rank : eventAnalysis.rank,
    0 as Integer & Rank<EventAnalysis>,
)

export {
    computeRank,
}
