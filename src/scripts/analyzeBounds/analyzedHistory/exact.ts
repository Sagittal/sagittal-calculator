import { AnalyzedEvent } from "./analyzeEvents"

const computeExact = (analyzedEvents: AnalyzedEvent[]) =>
    analyzedEvents
        .every(analyzedEvent => analyzedEvent.exact)

export {
    computeExact,
}
