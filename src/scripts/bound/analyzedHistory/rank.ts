import { Integer, Rank } from "../../../general"
import { AnalyzedEvent } from "./analyzeEvents"

const computeRank = (analyzedEvents: AnalyzedEvent[]): Integer & Rank<AnalyzedEvent> => analyzedEvents.reduce(
    (rank, analyzedEvent) =>
        rank > analyzedEvent.rank ? rank : analyzedEvent.rank,
    0 as Integer & Rank<AnalyzedEvent>,
)

export {
    computeRank,
}
