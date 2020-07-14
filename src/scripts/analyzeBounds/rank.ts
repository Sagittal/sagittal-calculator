import { AnalyzedEvent, EventRank } from "./types"

const computeRank = (analyzedEvents: AnalyzedEvent[]): EventRank => analyzedEvents.reduce(
    (rank, analyzedEvent) =>
        rank > analyzedEvent.rank ? rank : analyzedEvent.rank,
    0 as EventRank,
)

export {
    computeRank,
}
