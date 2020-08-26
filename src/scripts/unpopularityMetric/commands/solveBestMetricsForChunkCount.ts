import { program } from "commander"
import { performance } from "perf_hooks"
import { Count, difference, Ms, presentTime } from "../../../general"
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
    saveDebugMessage(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}`, DebugTarget.FINAL_SOLVER_RESULTS)

    const endTime = performance.now() as Ms
    if (time) {
        saveDebugMessage(`\n\nFINDING BEST METRICS TOOK ${presentTime(difference(endTime, startTime))}`, DebugTarget.FINAL_SOLVER_RESULTS)
    }
    saveDebugMessage(`MAX UNIT ${unpopularityMetricSettings.maxUnit}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`PARAMETER SCOPES @ ${unpopularityMetricSettings.noUseless ? "NO USELESS" : "ORIGINAL"} SETTINGS`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`Z ${unpopularityMetricSettings.z}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`ONLY TOP ${unpopularityMetricSettings.onlyTop}`, DebugTarget.FINAL_SOLVER_RESULTS)
})
