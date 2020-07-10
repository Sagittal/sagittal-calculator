import "colors"
import { program } from "commander"
import { BOUNDS } from "../../../notations/ji/bounds"
import { computeHistories } from "../plot/histories"
import { analyzeBound } from "../bound"
import { BOUNDS_ANALYSIS_HEADER_ROW } from "../present/headerRow"
import { presentBoundAnalysis } from "../present/boundAnalysis"
import { presentRankAnalyses } from "../present/rankAnalyses"
import { presentLevelAnalyses } from "../present/levelAnalyses"
import { visualizeBounds } from "../visualize/bounds"
import { updateFile } from "../file"
import { BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE } from "../constants"

program
    .option("-x, --do-not-update-files", "do not update files")
    .parse(process.argv)

const shouldUpdateFiles = !program.doNotUpdateFiles

let textOutput = BOUNDS_ANALYSIS_HEADER_ROW

const boundsAnalysis = []
BOUNDS.map((bound, boundId) => {
    const histories = computeHistories(bound)
    const boundAnalysis = analyzeBound(histories, bound)

    textOutput = textOutput.concat(presentBoundAnalysis(boundAnalysis, { bound, mode: "SUMMARY" }) + "\n")

    boundsAnalysis.push(boundAnalysis)
})

textOutput = textOutput.concat(presentLevelAnalyses())
textOutput = textOutput.concat(presentRankAnalyses())

if (shouldUpdateFiles) {
    updateFile(BOUNDS_ANALYSIS_TEXT_FILE, textOutput.replace(/\[\d\dm/g, "")) // remove colors

    const visualizationOutput = visualizeBounds(boundsAnalysis)
    updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
}

console.log(textOutput)
