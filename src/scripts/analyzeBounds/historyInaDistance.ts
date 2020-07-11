import { AnalyzedEvent } from "./types"

const computeHistoryInaDistance = (analyzedEvents: AnalyzedEvent[]) => {
    return analyzedEvents.reduce(
        (inaDistance, analyzedEvent) => {
            return inaDistance + analyzedEvent.inaDistance
        },
        0,
    )
}

export {
    computeHistoryInaDistance,
}
