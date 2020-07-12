import { AnalyzedEvent } from "./types"
import { Proportion, Sum } from "../../utilities/types"

const computeHistoryInaDistance = (analyzedEvents: AnalyzedEvent[]): Sum<Proportion> => {
    return analyzedEvents.reduce(
        (inaDistance: Sum<Proportion>, analyzedEvent: AnalyzedEvent) => {
            return inaDistance + analyzedEvent.inaDistance as Sum<Proportion>
        },
        0 as Sum<Proportion>,
    )
}

export {
    computeHistoryInaDistance,
}
