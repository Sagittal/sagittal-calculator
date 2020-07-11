import { AnalyzedEvent } from "./types"
import { Proportion } from "../../utilities/types"

const computeHistoryInaDistance = (analyzedEvents: AnalyzedEvent[]): Proportion => {
    return analyzedEvents.reduce(
        (inaDistance: Proportion, analyzedEvent: AnalyzedEvent) => {
            return inaDistance + analyzedEvent.inaDistance as Proportion
        },
        0 as Proportion,
    )
}

export {
    computeHistoryInaDistance,
}
