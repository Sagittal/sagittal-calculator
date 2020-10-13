import { BoundClassEventAnalysis } from "./events"

const computeExact = (boundClassEventAnalyses: BoundClassEventAnalysis[]): boolean =>
    boundClassEventAnalyses
        .every((boundClassEventAnalysis: BoundClassEventAnalysis): boolean => boundClassEventAnalysis.exact)

export {
    computeExact,
}
