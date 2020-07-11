import { AnalyzedEvent } from "./types"

const computeExact = (analyzedEvents: AnalyzedEvent[]) =>
    analyzedEvents
        .every(analyzedEvent => analyzedEvent.exact)

export {
    computeExact,
}
