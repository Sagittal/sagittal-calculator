import { Filename, Io, ioSettings, LogTarget, parseCommands, saveLog } from "../../../general"
import { ScriptGroup } from "../../types"
import { analyzeJiNotationBounds } from "../analyzeBounds"
import { JiNotationBoundAnalysis } from "../bound"
import { computeJiNotationBoundsImage, computeJiNotationBoundsTables } from "../io"

parseCommands(
    ScriptGroup.JI_NOTATION_BOUND as Filename,
    [LogTarget.JI_NOTATION_BOUNDS_TABLE, LogTarget.JI_NOTATION_BOUNDS_IMAGE]
)

ioSettings.scriptGroup = ScriptGroup.JI_NOTATION_BOUND as Filename

const jiNotationBoundAnalyses: JiNotationBoundAnalysis[] = analyzeJiNotationBounds()

const tableOutput: Io = computeJiNotationBoundsTables(jiNotationBoundAnalyses)

const imageOutput: Io = computeJiNotationBoundsImage(jiNotationBoundAnalyses)

saveLog(tableOutput, LogTarget.JI_NOTATION_BOUNDS_TABLE, { useTargetColor: false })
saveLog(imageOutput, LogTarget.JI_NOTATION_BOUNDS_IMAGE, {
    useTargetColor: false,
    fileExtensionProvided: true,
    writeOnly: !process.env.TEST_MODE,
})
