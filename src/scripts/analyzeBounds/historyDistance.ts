import { Cents } from "../../general"
import { AnalyzedEvent } from "./types"

const computeHistoryDistance = (analyzedEvents: AnalyzedEvent[]): Cents =>
    analyzedEvents.reduce(
        (distance, analyzedEvent): Cents =>
            distance + analyzedEvent.distance as Cents,
        0 as Cents,
    )

export {
    computeHistoryDistance,
}
