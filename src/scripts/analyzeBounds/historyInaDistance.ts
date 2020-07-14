import { Proportion, Sum } from "../../general"
import { AnalyzedEvent } from "./types"

const computeHistoryInaDistance = (analyzedEvents: AnalyzedEvent[]): Sum<Proportion> =>
    analyzedEvents.reduce(
        (inaDistance: Sum<Proportion>, analyzedEvent: AnalyzedEvent) =>
            inaDistance + analyzedEvent.inaDistance as Sum<Proportion>,
        0 as Sum<Proportion>,
    )

export {
    computeHistoryInaDistance,
}
