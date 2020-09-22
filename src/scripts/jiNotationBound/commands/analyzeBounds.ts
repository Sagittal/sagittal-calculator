import { Filename, Io, ioSettings, LogTarget, parseCommands, saveLog } from "../../../general"
import { ScriptGroup } from "../../types"
import { analyzeJiNotationBounds } from "../analyzeBounds"
import { JiNotationBoundAnalysis } from "../bound"
import { computeJiNotationBoundsImage, computeJiNotationBoundsOutput } from "../io"

parseCommands(
    ScriptGroup.JI_NOTATION_BOUND as Filename,
    [LogTarget.FINAL, LogTarget.FINAL],
)

ioSettings.scriptGroup = ScriptGroup.JI_NOTATION_BOUND as Filename

const jiNotationBoundAnalyses: JiNotationBoundAnalysis[] = analyzeJiNotationBounds()

const tableOutput: Io = computeJiNotationBoundsOutput(jiNotationBoundAnalyses)

const imageOutput: Io = computeJiNotationBoundsImage(jiNotationBoundAnalyses)

saveLog(tableOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundsTable.txt" as Filename,
})
saveLog(imageOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundsImage.svg" as Filename,
    writeOnly: !process.env.TEST_MODE,
})
