import { program } from "commander"
import { performance } from "perf_hooks"
import { Count } from "../../../general"
import { DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { solverStatus, unpopularityMetricSettings } from "../globals"
import { Chunk, formatBestMetrics, populateAndSearchScopesAndPerfectMetrics } from "../solver"
import { formatTime } from "../../../general/time"
import { applySharedUnpopularityMetricCommandSetup } from "./shared/shared"

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

const startTime = performance.now()
populateAndSearchScopesAndPerfectMetrics().then(() => {
    saveDebugMessage(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}`, DebugTarget.FINAL_SOLVER_RESULTS)

    const endTime = performance.now()
    if (time) {
        saveDebugMessage(`\n\nFINDING BEST METRICS TOOK ${formatTime(endTime - startTime)}`, DebugTarget.FINAL_SOLVER_RESULTS)
    }
    saveDebugMessage(`MAXIMUM UNIT ${unpopularityMetricSettings.maximumUnit}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`PARAMETER SCOPES @ ${unpopularityMetricSettings.noUseless ? "NO USELESS" : "ORIGINAL"} SETTINGS`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`Z ${unpopularityMetricSettings.z}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`ONLY TOP ${unpopularityMetricSettings.onlyTop}`, DebugTarget.FINAL_SOLVER_RESULTS)
})
