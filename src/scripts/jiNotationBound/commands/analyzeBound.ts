import { program } from "commander"
import { Filename, Io, ioSettings, LogTarget, parseCommands, parseInteger, saveLog } from "../../../general"
import { JiNotationBound, JI_NOTATION_BOUNDS } from "../../../sagittal"
import { ScriptGroup } from "../../types"
import { analyzeJiNotationBound } from "../bound"
import { computeHistories } from "../histories"
import { formatJiNotationBound } from "../io"

parseCommands(ScriptGroup.JI_NOTATION_BOUND as Filename, [LogTarget.FINAL])

ioSettings.scriptGroup = ScriptGroup.JI_NOTATION_BOUND as Filename

const jiNotationBoundId = program.args[ 0 ]

const jiNotationBound = jiNotationBoundId && JI_NOTATION_BOUNDS.find(
    (jiNotationBound: JiNotationBound): boolean => jiNotationBound.id === parseInteger(jiNotationBoundId as Io),
)

if (jiNotationBound) {
    const histories = computeHistories(jiNotationBound)
    const jiNotationBoundAnalysis = analyzeJiNotationBound(histories, jiNotationBound)

    const jiNotationBoundOutput: Io = formatJiNotationBound(jiNotationBoundAnalysis, { jiNotationBound })
    saveLog(jiNotationBoundOutput, LogTarget.FINAL)
} else {
    throw new Error(`Could not find JI notation bound with ID ${jiNotationBoundId}`)
}
