import { program } from "commander"
import { performance } from "perf_hooks"
import { Count, difference, formatTime, IO, Ms } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { solverStatus, unpopularityMetricSettings } from "../globals"
import { Chunk, formatBestMetrics, populateAndSearchScopesAndPerfectMetrics } from "../solver"
import { applySharedUnpopularityMetricCommandSetup } from "./shared"

// TODO: probably I should review the commit where I temporarily ripped out all of the async stuff
//  and make a commit where I make it possible to switch between them

program.option("-t, --no-time", "no time")

const defaultDebugTargets = [
    DebugTarget.SEARCH,
    DebugTarget.POPULATE,
    DebugTarget.FINAL_SOLVER_RESULTS,
    DebugTarget.NEW_BEST_METRIC,
]
applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets })

solverStatus.chunkCount = parseInt(program.args[ 0 ]) as Count<Chunk>

const time = !!program.time

const startTime = performance.now() as Ms
populateAndSearchScopesAndPerfectMetrics().then(() => {
    saveDebugMessage(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}` as IO, DebugTarget.FINAL_SOLVER_RESULTS)

    const endTime = performance.now() as Ms
    if (time) {
        saveDebugMessage(
            `\n\nFINDING BEST METRICS TOOK ${formatTime(difference(endTime, startTime))}` as IO,
            DebugTarget.FINAL_SOLVER_RESULTS,
        )
    }
    saveDebugMessage(`MAX UNIT ${unpopularityMetricSettings.maxUnit}` as IO, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(
        `AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}` as IO,
        DebugTarget.FINAL_SOLVER_RESULTS
    )
    saveDebugMessage(
        `PARAMETER SCOPES @ ${unpopularityMetricSettings.noUseless ? "NO USELESS" : "ORIGINAL"} SETTINGS` as IO,
        DebugTarget.FINAL_SOLVER_RESULTS,
    )
    saveDebugMessage(`Z ${unpopularityMetricSettings.z}` as IO, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`ONLY TOP ${unpopularityMetricSettings.onlyTop}` as IO, DebugTarget.FINAL_SOLVER_RESULTS)
})
