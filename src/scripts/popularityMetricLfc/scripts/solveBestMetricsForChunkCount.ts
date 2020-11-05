import {program} from "commander"
import {Count, Io, ioSettings, LogTarget, parseInteger, saveLog, time} from "../../../general"
import {popularityMetricLfcScriptGroupSettings, solverStatus} from "../globals"
import {
    Chunk,
    formatBestMetrics,
    populateAndSearchScopesAndPerfectMetrics,
    populateAndSearchScopesAndPerfectMetricsSync,
} from "../solver"
import {applySharedPopularityMetricLfcScriptSetup} from "./shared"

const defaultLogTargets = [
    LogTarget.SETUP,
    LogTarget.PROGRESS,
    LogTarget.FINAL,
]
applySharedPopularityMetricLfcScriptSetup({defaultLogTargets})

solverStatus.chunkCount = parseInteger(program.args[0] as Io) as Count<Chunk>

const finalOutput = (): void => {
    saveLog(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}`, LogTarget.FINAL)

    if (ioSettings.time) saveLog(`\n\nFINDING BEST METRICS TOOK ${time()}`, LogTarget.FINAL)
    saveLog(`MAX UNIT ${popularityMetricLfcScriptGroupSettings.maxUnit}`, LogTarget.FINAL)
    saveLog(`AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}`, LogTarget.FINAL)
    const originalOrNoUseless = popularityMetricLfcScriptGroupSettings.noUseless ? "NO USELESS" : "ORIGINAL"
    saveLog(`PARAMETER SCOPES @ ${originalOrNoUseless} SETTINGS`, LogTarget.FINAL)
    saveLog(`Z ${popularityMetricLfcScriptGroupSettings.z}`, LogTarget.FINAL)
    saveLog(`ONLY TOP ${popularityMetricLfcScriptGroupSettings.onlyTop}`, LogTarget.FINAL)
}

if (popularityMetricLfcScriptGroupSettings.sync) {
    populateAndSearchScopesAndPerfectMetricsSync()
    finalOutput()
} else {
    populateAndSearchScopesAndPerfectMetrics().then((): void => {
        finalOutput()
    })
}
