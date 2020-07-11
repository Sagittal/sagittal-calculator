import { AnalyzedEvent } from "./types"
import { Cents } from "../../utilities/types"

const computeHistoryDistance = (analyzedEvents: AnalyzedEvent[]): Cents => {
    return analyzedEvents.reduce(
        (distance, analyzedEvent): Cents => {
            return distance + analyzedEvent.distance as Cents
        },
        0 as Cents,
    )
}

export {
    computeHistoryDistance,
}
