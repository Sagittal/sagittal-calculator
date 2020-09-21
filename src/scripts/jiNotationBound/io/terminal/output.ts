import { concat, Io } from "../../../../general"
import { JiNotationBoundAnalysis } from "../../bound"
import { computeJiNotationBoundAnalysesOutput } from "./bounds"
import { formatJiNotationLevelAnalyses } from "./level"
import { formatRankAnalyses } from "./rank"

const computeJiNotationBoundsOutput = (jiNotationBoundAnalyses: JiNotationBoundAnalysis[]): Io => {
    let output: Io = computeJiNotationBoundAnalysesOutput(jiNotationBoundAnalyses)
    output = concat(output, formatJiNotationLevelAnalyses())
    output = concat(output, formatRankAnalyses())

    return output
}

export {
    computeJiNotationBoundsOutput,
}
