import "colors"
import { program } from "commander"
import { concat, IO, removeColor } from "../../../general"
import { analyzeBounds } from "../bounds"
import { BOUNDS_ANALYSIS_TEXT_FILE, BOUNDS_ANALYSIS_VISUALIZATION_FILE } from "../constants"
import { updateFile } from "../file"
import { computeBoundsAnalysisTable, formatLevelAnalyses, formatRankAnalyses, visualizeBounds } from "../io"

program
    .option("-x, --do-not-update-files", "do not update files")
    .parse(process.argv)

const shouldUpdateFiles = !program.doNotUpdateFiles

const boundsAnalysis = analyzeBounds()

let output: IO = computeBoundsAnalysisTable(boundsAnalysis)
output = concat(output, formatLevelAnalyses()) // TODO: these should probably also use the table helpers
output = concat(output, formatRankAnalyses())

if (shouldUpdateFiles) {
    updateFile(BOUNDS_ANALYSIS_TEXT_FILE, removeColor(output))

    const visualizationOutput = visualizeBounds(boundsAnalysis) as IO
    updateFile(BOUNDS_ANALYSIS_VISUALIZATION_FILE, visualizationOutput)
}

console.log(output)
