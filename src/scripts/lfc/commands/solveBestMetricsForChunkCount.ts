import { program } from "commander"
import { Count, difference, formatTime, IO, LogTarget, now, saveLog } from "../../../general"
import { LFC } from "../constants"
import { lfcSettings, solverStatus } from "../globals"
import { Chunk, formatBestMetrics, populateAndSearchScopesAndPerfectMetrics } from "../solver"
import { applySharedLfcCommandSetup } from "./shared"

// TODO: probably I should review the commit where I temporarily ripped out all of the async stuff
//  and make a commit where I make it possible to switch between them

program.option("-x, --no-time", "no time")

const defaultLogTargets = [
    LogTarget.SEARCH,
    LogTarget.POPULATE,
    LogTarget.FINAL_SOLVER_RESULTS,
    LogTarget.NEW_BEST_METRIC,
]
applySharedLfcCommandSetup({ defaultLogTargets })

solverStatus.chunkCount = parseInt(program.args[ 0 ]) as Count<Chunk>

const time = !!program.time

const startTime = now()
populateAndSearchScopesAndPerfectMetrics().then(() => {
    saveLog(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}` as IO, LogTarget.FINAL_SOLVER_RESULTS, LFC)

    const endTime = now()
    if (time) {
        saveLog(
            `\n\nFINDING BEST METRICS TOOK ${formatTime(difference(endTime, startTime))}` as IO,
            LogTarget.FINAL_SOLVER_RESULTS,
            LFC,
        )
    }
    saveLog(`MAX UNIT ${lfcSettings.maxUnit}` as IO, LogTarget.FINAL_SOLVER_RESULTS, LFC)
    saveLog(
        `AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}` as IO,
        LogTarget.FINAL_SOLVER_RESULTS,
        LFC,
    )
    saveLog(
        `PARAMETER SCOPES @ ${lfcSettings.noUseless ? "NO USELESS" : "ORIGINAL"} SETTINGS` as IO,
        LogTarget.FINAL_SOLVER_RESULTS,
        LFC,
    )
    saveLog(`Z ${lfcSettings.z}` as IO, LogTarget.FINAL_SOLVER_RESULTS, LFC)
    saveLog(`ONLY TOP ${lfcSettings.onlyTop}` as IO, LogTarget.FINAL_SOLVER_RESULTS, LFC)
})
