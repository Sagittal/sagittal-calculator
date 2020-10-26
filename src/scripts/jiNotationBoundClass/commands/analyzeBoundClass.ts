import {program} from "commander"
import {
    Filename,
    Index,
    Io,
    ioSettings,
    isUndefined,
    LogTarget,
    parseCommands,
    parseInteger,
    saveLog,
} from "../../../general"
import {BoundClass, JI_NOTATION_BOUND_CLASS_ENTRIES} from "../../../sagittal"
import {ScriptGroup} from "../../types"
import {analyzeJiNotationBoundClass} from "../boundClass"
import {computeHistories} from "../histories"
import {formatJiNotationBoundClass} from "../io"

parseCommands(ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename, [LogTarget.FINAL])

ioSettings.scriptGroup = ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename

const boundClassIndex = program.args[0]

if (isUndefined(boundClassIndex)) {
    throw new Error(`No bound class index provided.`)
}

const [boundClassId, jiNotationBoundClass] = JI_NOTATION_BOUND_CLASS_ENTRIES[parseInteger(boundClassIndex)]

if (jiNotationBoundClass) {
    const histories = computeHistories(jiNotationBoundClass)
    const jiNotationBoundClassAnalysis = analyzeJiNotationBoundClass(
        histories,
        jiNotationBoundClass,
        parseInteger(boundClassIndex) as Index<BoundClass>,
    )

    const jiNotationBoundOutput: Io =
        formatJiNotationBoundClass(jiNotationBoundClassAnalysis, [boundClassId, jiNotationBoundClass])
    saveLog(jiNotationBoundOutput, LogTarget.FINAL)
} else {
    throw new Error(`Could not find JI notation bound class with index ${boundClassIndex}`)
}
