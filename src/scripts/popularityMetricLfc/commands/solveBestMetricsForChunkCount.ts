import { program } from "commander"
import { Count, Io, ioSettings, LogTarget, parseInteger, saveLog, time } from "../../../general"
import { popularityMetricLfcScriptGroupSettings, solverStatus } from "../globals"
import { Chunk, formatBestMetrics, populateAndSearchScopesAndPerfectMetrics } from "../solver"
import { applySharedPopularityMetricLfcCommandSetup } from "./shared"

// TODO: BRING BACK ASYNC probably I should review the commit where I temporarily ripped out all of the async stuff
//  and make a commit where I make it possible to switch between them

const defaultLogTargets = [
    LogTarget.SEARCH,
    LogTarget.POPULATE,
    LogTarget.FINAL_SOLVER_RESULTS,
]
applySharedPopularityMetricLfcCommandSetup({ defaultLogTargets })

solverStatus.chunkCount = parseInteger(program.args[ 0 ]) as Count<Chunk>

populateAndSearchScopesAndPerfectMetrics().then((): void => {
    saveLog(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}` as Io, LogTarget.FINAL_SOLVER_RESULTS)

    if (ioSettings.time) {
        saveLog(
            `\n\nFINDING BEST METRICS TOOK ${time()}` as Io,
            LogTarget.FINAL_SOLVER_RESULTS,
        )
    }
    saveLog(`MAX UNIT ${popularityMetricLfcScriptGroupSettings.maxUnit}` as Io, LogTarget.FINAL_SOLVER_RESULTS)
    saveLog(`AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}` as Io, LogTarget.FINAL_SOLVER_RESULTS)
    const originalOrNoUseless = popularityMetricLfcScriptGroupSettings.noUseless ? "NO USELESS" : "ORIGINAL"
    saveLog(`PARAMETER SCOPES @ ${originalOrNoUseless} SETTINGS` as Io, LogTarget.FINAL_SOLVER_RESULTS)
    saveLog(`Z ${popularityMetricLfcScriptGroupSettings.z}` as Io, LogTarget.FINAL_SOLVER_RESULTS)
    saveLog(`ONLY TOP ${popularityMetricLfcScriptGroupSettings.onlyTop}` as Io, LogTarget.FINAL_SOLVER_RESULTS)
})
