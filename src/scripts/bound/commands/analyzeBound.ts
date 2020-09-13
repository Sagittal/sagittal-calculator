import { program } from "commander"
import { Filename, ioSettings, LogTarget, parseCommands, parseInteger, saveLog } from "../../../general"
import { JI_BOUNDS } from "../../../sagittal"
import { ScriptGroup } from "../../types"
import { analyzeBound } from "../analyzeBound"
import { computeHistories } from "../histories"
import { formatBound } from "../io"

parseCommands(ScriptGroup.BOUND as Filename, [LogTarget.BOUND])

ioSettings.scriptGroup = ScriptGroup.BOUND as Filename

const boundId = program.args[ 0 ]

const bound = boundId && JI_BOUNDS.find(bound => bound.id === parseInteger(boundId))

if (bound) {
    const histories = computeHistories(bound)
    const boundAnalysis = analyzeBound(histories, bound)

    const message = formatBound(boundAnalysis, { bound })
    saveLog(message, LogTarget.BOUND)
} else {
    throw new Error(`Could not find bound with ID ${boundId}`)
}
