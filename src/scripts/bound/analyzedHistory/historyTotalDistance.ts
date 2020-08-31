import { Cents, Sum } from "../../../general"
import { AnalyzedEvent } from "./analyzeEvents"

const computeHistoryTotalDistance = (analyzedEvents: AnalyzedEvent[]): Sum<Cents> =>
    analyzedEvents.reduce(
        (distance, analyzedEvent): Sum<Cents> =>
            distance + analyzedEvent.distance as Sum<Cents>,
        0 as Sum<Cents>,
    )

export {
    computeHistoryTotalDistance,
}
