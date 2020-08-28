import "colors"
import { program } from "commander"
import { concat, IO, NEWLINE, removeColor, sumText } from "../../../general"
import { BOUNDS } from "../../../notations"
import { analyzeBound } from "../bound"
import { BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE } from "../constants"
import { updateFile } from "../file"
import {
    AnalysisMode,
    BOUNDS_ANALYSIS_HEADER_ROW,
    formatBound,
    formatLevelAnalyses,
    formatRankAnalyses,
    visualizeBounds,
} from "../io"
import { computeHistories } from "../plot"
import { AnalyzedBound } from "../types"

program
    .option("-x, --do-not-update-files", "do not update files")
    .parse(process.argv)

const shouldUpdateFiles = !program.doNotUpdateFiles

let textOutput: IO = BOUNDS_ANALYSIS_HEADER_ROW

const boundsAnalysis: AnalyzedBound[] = []
BOUNDS.map(bound => {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    textOutput = concat(textOutput, sumText(formatBound(analyzedBound, { bound, mode: AnalysisMode.SUMMARY }), NEWLINE))

    boundsAnalysis.push(analyzedBound)
})

textOutput = concat(textOutput, formatLevelAnalyses())
textOutput = concat(textOutput, formatRankAnalyses())

if (shouldUpdateFiles) {
    updateFile(
        BOUNDS_ANALYSIS_TEXT_FILE,
        removeColor(textOutput),
    )

    const visualizationOutput = visualizeBounds(boundsAnalysis) as IO
    updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
}

console.log(textOutput)
