import { concat, Io } from "../../../../general"
import { JiNotationBoundAnalysis } from "../../bound"
import { computeJiNotationBoundAnalysesTable } from "./bounds"
import { formatJiNotationLevelAnalyses } from "./level"
import { formatRankAnalyses } from "./rank"

const computeJiNotationBoundsTables = (jiNotationBoundAnalyses: JiNotationBoundAnalysis[]): Io => {
    let output: Io = computeJiNotationBoundAnalysesTable(jiNotationBoundAnalyses)
    output = concat(output, formatJiNotationLevelAnalyses())
    output = concat(output, formatRankAnalyses())

    return output
}

export {
    computeJiNotationBoundsTables,
}
