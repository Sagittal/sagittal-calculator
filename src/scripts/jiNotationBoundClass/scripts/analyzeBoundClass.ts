import {program} from "commander"
import {Filename, Index, Io, isUndefined, LogTarget, parseInteger, saveLog, setupScriptAndIo} from "../../../general"
import {BoundClass, JI_NOTATION_BOUND_CLASS_ENTRIES} from "../../../sagittal"
import {ScriptGroup} from "../../types"
import {analyzeJiNotationBoundClass} from "../boundClass"
import {computeHistories} from "../histories"
import {formatJiNotationBoundClass} from "../io"

setupScriptAndIo(ScriptGroup.JI_NOTATION_BOUND_CLASS as Filename, [LogTarget.FINAL])

const boundClassIndex = program.args[0]

// TODO: POST-NOTATION-GENERATION: IDS VS INDICES
//  Stop using bound class index
//  May want to consider having this thing not care about bound class *index* and just rework output to go by
//  The bound id; only reason I can think *not* to do that is that it might assume some of the things it's verifying?
//  Except not really, because we're not really moving the bounds by amounts greater than *minas*
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
