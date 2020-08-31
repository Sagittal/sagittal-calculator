import { program } from "commander"
import { LogTarget, parseCommands, saveLog } from "../../../general"
import { BOUNDS } from "../../../sagittal"
import { analyzeBound } from "../analyzeBound"
import { BOUND_SCRIPT_GROUP } from "../constants"
import { computeHistories } from "../histories"
import { formatBound } from "../io"

parseCommands(BOUND_SCRIPT_GROUP, [LogTarget.BOUND])

const boundId = program.args[ 0 ]

const bound = boundId && BOUNDS.find(bound => bound.id === parseInt(boundId))

if (bound) {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    const message = formatBound(analyzedBound, { bound })
    saveLog(message, LogTarget.BOUND, BOUND_SCRIPT_GROUP)
} else {
    throw new Error(`Could not find bound with ID ${boundId}`)
}
