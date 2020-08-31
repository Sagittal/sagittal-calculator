import { Integer, Rank } from "../../../general"
import { AnalyzedEvent } from "./analyzeEvents"

const computeRank = (analyzedEvents: AnalyzedEvent[]): Rank<AnalyzedEvent, Integer> => analyzedEvents.reduce(
    (rank, analyzedEvent) =>
        rank > analyzedEvent.rank ? rank : analyzedEvent.rank,
    0 as Rank<AnalyzedEvent, Integer>,
)

export {
    computeRank,
}
