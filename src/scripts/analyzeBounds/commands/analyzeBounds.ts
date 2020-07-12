import "colors"
import { program } from "commander"
import { BOUNDS } from "../../../notations/ji/bounds"
import { computeHistories } from "../plot/histories"
import { analyzeBound } from "../bound"
import { BOUNDS_ANALYSIS_HEADER_ROW } from "../present/headerRow"
import { presentBound } from "../present/bound"
import { presentRankAnalyses } from "../present/rankAnalyses"
import { presentLevelAnalyses } from "../present/levelAnalyses"
import { visualizeBounds } from "../visualize/bounds"
import { updateFile } from "../file"
import { BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE } from "../constants"
import { AnalyzedBound } from "../types"
import { AnalysisMode } from "../present/types"

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
    updateFile(BOUNDS_ANALYSIS_TEXT_FILE, textOutput.replace(/\[\d\dm/g, "")) // remove colors

    const visualizationOutput = visualizeBounds(boundsAnalysis)
    updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
}

console.log(textOutput)
