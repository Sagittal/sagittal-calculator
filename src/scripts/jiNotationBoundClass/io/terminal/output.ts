import {concat, Io} from "@sagittal/general"
import {JiNotationBoundClassAnalysis} from "../../boundClass"
import {computeJiNotationBoundClassAnalysesOutput} from "./boundClasses"
import {formatJiNotationLevelAnalyses} from "./level"
import {formatRankAnalyses} from "./rank"

const computeJiNotationBoundClassesOutput = (jiNotationBoundClassAnalyses: JiNotationBoundClassAnalysis[]): Io => {
    let output: Io = computeJiNotationBoundClassAnalysesOutput(jiNotationBoundClassAnalyses)
    output = concat(output, formatJiNotationLevelAnalyses())
    output = concat(output, formatRankAnalyses())

    return output
}

export {
    computeJiNotationBoundClassesOutput,
}
