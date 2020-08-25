import { program } from "commander"
import { performance } from "perf_hooks"
import { formatTime, Max, Unit } from "../../../general"
import { Metric } from "../bestMetric"
import { DEFAULT_MAX_UNIT } from "../constants"
import { DebugTarget, saveDebugMessage } from "../debug"
import { unpopularityMetricSettings } from "../globals"
import { perfectMetrics } from "../perfecter"
import { formatBestMetrics } from "../solver"
import { ParameterValue } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup, load } from "./shared"

program.option("-t, --no-time", "no time")

const defaultDebugTargets = [
    DebugTarget.PERFECT,
    DebugTarget.SEARCH,
    DebugTarget.POPULATE,
    DebugTarget.FINAL_SOLVER_RESULTS,
    DebugTarget.NEW_BEST_METRIC,
    DebugTarget.FINAL_PERFECTER_RESULTS,
]
applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets })

const time = !!program.time

unpopularityMetricSettings.maxUnit = DEFAULT_MAX_UNIT / 10 as Max<Unit<ParameterValue>>

const bestMetricsToBePerfected = load("metrics") as Record<string, Metric>

const startTime = performance.now()
perfectMetrics(Object.values(bestMetricsToBePerfected)).then(() => {
    saveDebugMessage(`\n\nTHE PERFECTED METRICS ARE ${formatBestMetrics()}`, DebugTarget.FINAL_PERFECTER_RESULTS)

    const endTime = performance.now()
    if (time) {
        saveDebugMessage(`\n\nPERFECTING METRICS TOOK ${formatTime(endTime - startTime)}`, DebugTarget.FINAL_PERFECTER_RESULTS)
    }
    saveDebugMessage(`MAX UNIT ${unpopularityMetricSettings.maxUnit}`, DebugTarget.FINAL_PERFECTER_RESULTS)
    saveDebugMessage(`Z ${unpopularityMetricSettings.z}`, DebugTarget.FINAL_PERFECTER_RESULTS)
    saveDebugMessage(`ONLY TOP ${unpopularityMetricSettings.onlyTop}`, DebugTarget.FINAL_PERFECTER_RESULTS)
})
