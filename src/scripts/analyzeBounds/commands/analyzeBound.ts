// TODO: perhaps it would be nice if one of these log helpers ensured colors was required
//  so we don't get those annoying "undefined" console logs
import "colors"
import { program } from "commander"
import {
    Filename,
    LogTarget,
    maybeClearLogFiles,
    saveLog,
    setLogTargets,
    setupToMaybeClearLogFiles,
} from "../../../general"
import { BOUNDS } from "../../../sagittal"
import { analyzeBound } from "../bound"
import { computeFormattedBound } from "../io"
import { computeHistories } from "../plot"

setLogTargets(LogTarget.BOUND)

setupToMaybeClearLogFiles()

program.parse(process.argv)

maybeClearLogFiles("analyzeBounds" as Filename)

const boundId = program.args[ 0 ]

const bound = boundId && BOUNDS.find(bound => bound.id === parseInt(boundId))

if (bound) {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    const message = computeFormattedBound(analyzedBound, { bound })
    saveLog(message, LogTarget.BOUND, "analyzeBounds" as Filename)
} else {
    throw new Error(`Could not find bound with ID ${boundId}`)
}
