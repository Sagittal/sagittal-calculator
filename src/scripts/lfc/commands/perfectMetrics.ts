import { program } from "commander"
import { CommandFlag, difference, Filename, formatTime, IO, LogTarget, Max, now, saveLog, Unit } from "../../../general"
import { Metric } from "../bestMetric"
import { DEFAULT_MAX_UNIT, LFC_SCRIPT_GROUP } from "../constants"
import { lfcScriptGroupSettings } from "../globals"
import { perfectMetrics } from "../perfecter"
import { formatBestMetrics } from "../solver"
import { ParameterValue } from "../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "./shared"

program.option(`-${CommandFlag.NO_TIME}, --no-time`, "no time")

const defaultLogTargets = [
    LogTarget.PERFECT,
    LogTarget.SEARCH,
    LogTarget.POPULATE,
    LogTarget.FINAL_SOLVER_RESULTS,
    LogTarget.NEW_BEST_METRIC,
    LogTarget.FINAL_PERFECTER_RESULTS,
]
applySharedLfcCommandSetup({ defaultLogTargets })

const time = !!program.time

lfcScriptGroupSettings.maxUnit = DEFAULT_MAX_UNIT / 10 as Max<Unit<ParameterValue>>

const bestMetricsToBePerfected = load("metrics" as Filename) as Record<string, Metric>

const startTime = now()
perfectMetrics(Object.values(bestMetricsToBePerfected)).then(() => {
    saveLog(
        `\n\nTHE PERFECTED METRICS ARE ${formatBestMetrics()}` as IO,
        LogTarget.FINAL_PERFECTER_RESULTS,
        LFC_SCRIPT_GROUP,
    )

    const endTime = now()
    if (time) {
        saveLog(
            `\n\nPERFECTING METRICS TOOK ${formatTime(difference(endTime, startTime))}` as IO,
            LogTarget.FINAL_PERFECTER_RESULTS,
            LFC_SCRIPT_GROUP,
        )
    }
    saveLog(`MAX UNIT ${lfcScriptGroupSettings.maxUnit}` as IO, LogTarget.FINAL_PERFECTER_RESULTS, LFC_SCRIPT_GROUP)
    saveLog(`Z ${lfcScriptGroupSettings.z}` as IO, LogTarget.FINAL_PERFECTER_RESULTS, LFC_SCRIPT_GROUP)
    saveLog(`ONLY TOP ${lfcScriptGroupSettings.onlyTop}` as IO, LogTarget.FINAL_PERFECTER_RESULTS, LFC_SCRIPT_GROUP)
})
