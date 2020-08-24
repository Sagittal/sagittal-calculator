import { Rank } from "../../general"
import { AnalyzedEvent } from "./types"

const computeRank = (analyzedEvents: AnalyzedEvent[]): Rank<AnalyzedEvent> => analyzedEvents.reduce(
    (rank, analyzedEvent) =>
        rank > analyzedEvent.rank ? rank : analyzedEvent.rank,
    0 as Rank<AnalyzedEvent>,
)

export {
    computeRank,
}
