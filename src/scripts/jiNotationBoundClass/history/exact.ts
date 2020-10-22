import {BoundEventAnalysis} from "./events"

const computeExact = (boundEventAnalyses: BoundEventAnalysis[]): boolean =>
    boundEventAnalyses
        .every((boundEventAnalysis: BoundEventAnalysis): boolean => boundEventAnalysis.exact)

export {
    computeExact,
}
