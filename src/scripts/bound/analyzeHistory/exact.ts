import { EventAnalysis } from "./analyzeEvents"

const computeExact = (eventAnalyses: EventAnalysis[]) =>
    eventAnalyses
        .every(eventAnalysis => eventAnalysis.exact)

export {
    computeExact,
}
