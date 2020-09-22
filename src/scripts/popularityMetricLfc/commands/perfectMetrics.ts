import { Filename, Io, ioSettings, LogTarget, Name, saveLog, time } from "../../../general"
import { Metric } from "../bestMetric"
import { DEFAULT_MAX_UNIT_WHEN_PERFECTING } from "../constants"
import { popularityMetricLfcScriptGroupSettings } from "../globals"
import { perfectMetrics, perfectMetricsSync } from "../perfecter"
import { formatBestMetrics } from "../solver"
import { applySharedPopularityMetricLfcCommandSetup, load } from "./shared"

const defaultLogTargets = [
    LogTarget.SETUP,
    LogTarget.PROGRESS,
    LogTarget.RESULT,
    LogTarget.FINAL,
]
applySharedPopularityMetricLfcCommandSetup({ defaultLogTargets })

popularityMetricLfcScriptGroupSettings.maxUnit = DEFAULT_MAX_UNIT_WHEN_PERFECTING

const bestMetricsToBePerfected = load("metrics" as Filename) as Record<Name<Metric>, Metric>

const finalOutput = (): void => {
    saveLog(`\n\nTHE PERFECTED METRICS ARE ${formatBestMetrics()}` as Io, LogTarget.FINAL)

    if (ioSettings.time) {
        saveLog(
            `\n\nPERFECTING METRICS TOOK ${time()}` as Io,
            LogTarget.FINAL,
        )
    }
    saveLog(`MAX UNIT ${popularityMetricLfcScriptGroupSettings.maxUnit}` as Io, LogTarget.FINAL)
    saveLog(`Z ${popularityMetricLfcScriptGroupSettings.z}` as Io, LogTarget.FINAL)
    saveLog(`ONLY TOP ${popularityMetricLfcScriptGroupSettings.onlyTop}` as Io, LogTarget.FINAL)
}

if (popularityMetricLfcScriptGroupSettings.sync) {
    perfectMetricsSync(Object.values(bestMetricsToBePerfected))
    finalOutput()
} else {
    perfectMetrics(Object.values(bestMetricsToBePerfected)).then((): void => {
        finalOutput()
    })
}
