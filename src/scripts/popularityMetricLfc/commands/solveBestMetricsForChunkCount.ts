import { program } from "commander"
import { Count, Io, ioSettings, LogTarget, parseInteger, saveLog, time } from "../../../general"
import { popularityMetricLfcScriptGroupSettings, solverStatus } from "../globals"
import {
    Chunk,
    formatBestMetrics,
    populateAndSearchScopesAndPerfectMetrics,
    populateAndSearchScopesAndPerfectMetricsSync,
} from "../solver"
import { applySharedPopularityMetricLfcCommandSetup } from "./shared"

const defaultLogTargets = [
    LogTarget.SETUP,
    LogTarget.PROGRESS,
    LogTarget.FINAL,
]
applySharedPopularityMetricLfcCommandSetup({ defaultLogTargets })

solverStatus.chunkCount = parseInteger(program.args[ 0 ] as Io) as Count<Chunk>

const finalOutput = (): void => {
    saveLog(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}` as Io, LogTarget.FINAL)

    if (ioSettings.time) {
        saveLog(
            `\n\nFINDING BEST METRICS TOOK ${time()}` as Io,
            LogTarget.FINAL,
        )
    }
    saveLog(`MAX UNIT ${popularityMetricLfcScriptGroupSettings.maxUnit}` as Io, LogTarget.FINAL)
    saveLog(`AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}` as Io, LogTarget.FINAL)
    const originalOrNoUseless = popularityMetricLfcScriptGroupSettings.noUseless ? "NO USELESS" : "ORIGINAL"
    saveLog(`PARAMETER SCOPES @ ${originalOrNoUseless} SETTINGS` as Io, LogTarget.FINAL)
    saveLog(`Z ${popularityMetricLfcScriptGroupSettings.z}` as Io, LogTarget.FINAL)
    saveLog(`ONLY TOP ${popularityMetricLfcScriptGroupSettings.onlyTop}` as Io, LogTarget.FINAL)
}

if (popularityMetricLfcScriptGroupSettings.sync) {
    populateAndSearchScopesAndPerfectMetricsSync()
    finalOutput()
} else {
    populateAndSearchScopesAndPerfectMetrics().then((): void => {
        finalOutput()
    })
}
