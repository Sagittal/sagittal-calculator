import "colors"
import { program } from "commander"
import { BOUNDS } from "../../../notations"
import { analyzeBound } from "../bound"
import { BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE } from "../constants"
import { updateFile } from "../file"
import { computeHistories } from "../plot"
import { AnalysisMode, BOUNDS_ANALYSIS_HEADER_ROW, presentBound, presentLevelAnalyses, presentRankAnalyses} from "../present"
import { AnalyzedBound } from "../types"
import { visualizeBounds } from "../visualize"

program
    .option("-x, --do-not-update-files", "do not update files")
    .parse(process.argv)

const shouldUpdateFiles = !program.doNotUpdateFiles

let textOutput = BOUNDS_ANALYSIS_HEADER_ROW

const boundsAnalysis: AnalyzedBound[] = []
BOUNDS.map(bound => {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    textOutput = textOutput.concat(presentBound(analyzedBound, { bound, mode: AnalysisMode.SUMMARY }) + "\n")

    boundsAnalysis.push(analyzedBound)
})

textOutput = textOutput.concat(presentLevelAnalyses())
textOutput = textOutput.concat(presentRankAnalyses())

if (shouldUpdateFiles) {
    updateFile(BOUNDS_ANALYSIS_TEXT_FILE, textOutput.replace(/\[\d\dm/g, "")) // Remove colors

    const visualizationOutput = visualizeBounds(boundsAnalysis)
    updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
}

console.log(textOutput)
