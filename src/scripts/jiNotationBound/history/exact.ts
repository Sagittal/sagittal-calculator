import { EventAnalysis } from "./events"

const computeExact = (eventAnalyses: EventAnalysis[]): boolean =>
    eventAnalyses
        .every((eventAnalysis: EventAnalysis): boolean => eventAnalysis.exact)

export {
    computeExact,
}
