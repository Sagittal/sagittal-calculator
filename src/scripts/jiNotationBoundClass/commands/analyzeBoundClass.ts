import { program } from "commander"
import { Filename, Io, ioSettings, LogTarget, parseCommands, parseInteger, saveLog } from "../../../general"
import { JiNotationBoundClass, JI_NOTATION_BOUND_CLASSES } from "../../../sagittal"
import { ScriptGroup } from "../../types"
import { analyzeJiNotationBoundClass } from "../boundClass"
import { computeHistories } from "../histories"
import { formatJiNotationBoundClass } from "../io"

parseCommands(ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename, [LogTarget.FINAL])

ioSettings.scriptGroup = ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename

const boundClassId = program.args[ 0 ]

const jiNotationBoundClass = boundClassId && JI_NOTATION_BOUND_CLASSES.find(
    (jiNotationBoundClass: JiNotationBoundClass): boolean => {
        return jiNotationBoundClass.id === parseInteger(boundClassId as Io)
    },
)

if (jiNotationBoundClass) {
    const histories = computeHistories(jiNotationBoundClass)
    const jiNotationBoundClassAnalysis = analyzeJiNotationBoundClass(histories, jiNotationBoundClass)

    const jiNotationBoundOutput: Io = formatJiNotationBoundClass(jiNotationBoundClassAnalysis, { jiNotationBoundClass })
    saveLog(jiNotationBoundOutput, LogTarget.FINAL)
} else {
    throw new Error(`Could not find JI notation bound class with ID ${boundClassId}`)
}
