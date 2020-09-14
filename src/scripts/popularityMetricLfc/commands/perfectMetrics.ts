import { program } from "commander"
import { CommandFlag, Filename, formatTime, Io, LogTarget, now, saveLog, subtract } from "../../../general"
import { Metric } from "../bestMetric"
import { DEFAULT_MAX_UNIT_WHEN_PERFECTING } from "../constants"
import { popularityMetricLfcScriptGroupSettings } from "../globals"
import { perfectMetrics } from "../perfecter"
import { formatBestMetrics } from "../solver"
import { applySharedPopularityMetricLfcCommandSetup, load } from "./shared"

program.option(`-${CommandFlag.NO_TIME}, --no-time`, "no time")

const defaultLogTargets = [
    LogTarget.PERFECT,
    LogTarget.SEARCH,
    LogTarget.POPULATE,
    LogTarget.FINAL_SOLVER_RESULTS,
    LogTarget.NEW_BEST_METRIC,
    LogTarget.FINAL_PERFECTER_RESULTS,
]
applySharedPopularityMetricLfcCommandSetup({ defaultLogTargets })

const time = !!program.time

popularityMetricLfcScriptGroupSettings.maxUnit = DEFAULT_MAX_UNIT_WHEN_PERFECTING

const bestMetricsToBePerfected = load("metrics" as Filename) as Record<string, Metric>

const startTime = now()
perfectMetrics(Object.values(bestMetricsToBePerfected)).then((): void => {
    saveLog(`\n\nTHE PERFECTED METRICS ARE ${formatBestMetrics()}` as Io, LogTarget.FINAL_PERFECTER_RESULTS)

    const endTime = now()
    if (time) {
        saveLog(
            `\n\nPERFECTING METRICS TOOK ${formatTime(subtract(endTime, startTime))}` as Io,
            LogTarget.FINAL_PERFECTER_RESULTS,
        )
    }
    saveLog(`MAX UNIT ${popularityMetricLfcScriptGroupSettings.maxUnit}` as Io, LogTarget.FINAL_PERFECTER_RESULTS)
    saveLog(`Z ${popularityMetricLfcScriptGroupSettings.z}` as Io, LogTarget.FINAL_PERFECTER_RESULTS)
    saveLog(`ONLY TOP ${popularityMetricLfcScriptGroupSettings.onlyTop}` as Io, LogTarget.FINAL_PERFECTER_RESULTS)
})
