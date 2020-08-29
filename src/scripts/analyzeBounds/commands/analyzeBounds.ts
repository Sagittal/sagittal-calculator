import "colors"
import { program } from "commander"
import {
    concat,
    Filename,
    IO,
    LogTarget,
    maybeClearLogFiles,
    saveLog,
    setLogTargets,
    setupToMaybeClearLogFiles,
} from "../../../general"
import { analyzeBounds } from "../bounds"
import { computeBoundsAnalysisTable, formatLevelAnalyses, formatRankAnalyses, visualizeBounds } from "../io"

setLogTargets([LogTarget.BOUNDS_TERMINAL, LogTarget.BOUNDS_IMAGE].join(","))

setupToMaybeClearLogFiles()

program.parse(process.argv)

maybeClearLogFiles("analyzeBounds" as Filename)

const boundsAnalysis = analyzeBounds()

let output: IO = computeBoundsAnalysisTable(boundsAnalysis)
output = concat(output, formatLevelAnalyses()) // TODO: these should probably also use the table helpers
output = concat(output, formatRankAnalyses())

const visualizationOutput = visualizeBounds(boundsAnalysis)

saveLog(output, LogTarget.BOUNDS_TERMINAL, "analyzeBounds" as Filename, { useTargetColor: false })
saveLog(visualizationOutput, LogTarget.BOUNDS_IMAGE, "analyzeBounds" as Filename, {
    useTargetColor: false,
    fileExtensionProvided: true,
    writeOnly: true,
})
