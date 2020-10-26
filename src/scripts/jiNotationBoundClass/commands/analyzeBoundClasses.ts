import {Filename, Io, ioSettings, LogTarget, parseCommands, saveLog} from "../../../general"
import {ScriptGroup} from "../../types"
import {analyzeJiNotationBoundClasses} from "../analyzeBoundClasses"
import {JiNotationBoundClassAnalysis} from "../boundClass"
import {computeJiNotationBoundClassesImage, computeJiNotationBoundsOutput} from "../io"

parseCommands(ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename, [LogTarget.FINAL])

ioSettings.scriptGroup = ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename

const jiNotationBoundClassAnalyses: JiNotationBoundClassAnalysis[] = analyzeJiNotationBoundClasses()

const tableOutput: Io = computeJiNotationBoundsOutput(jiNotationBoundClassAnalyses)

const imageOutput: Io = computeJiNotationBoundClassesImage(jiNotationBoundClassAnalyses)

saveLog(tableOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundClass/jiNotationBoundClassesTable.txt" as Filename,
})
saveLog(imageOutput, LogTarget.FINAL, {
    useTargetColor: false,
    filenameOverride: "jiNotationBoundClass/jiNotationBoundClassesImage.svg" as Filename,
    writeOnly: !process.env.TEST_MODE,
})
