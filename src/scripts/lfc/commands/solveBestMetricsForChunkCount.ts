import { program } from "commander"
import { CommandFlag, Count, difference, formatTime, IO, LogTarget, now, saveLog } from "../../../general"
import { LFC_SCRIPT_GROUP } from "../constants"
import { lfcScriptGroupSettings, solverStatus } from "../globals"
import { Chunk, formatBestMetrics, populateAndSearchScopesAndPerfectMetrics } from "../solver"
import { applySharedLfcCommandSetup } from "./shared"

// TODO: probably I should review the commit where I temporarily ripped out all of the async stuff
//  and make a commit where I make it possible to switch between them

program.option(`-${CommandFlag.NO_TIME}, --no-time`, "no time")

const defaultLogTargets = [
    LogTarget.SEARCH,
    LogTarget.POPULATE,
    LogTarget.FINAL_SOLVER_RESULTS,
]
applySharedLfcCommandSetup({ defaultLogTargets })

solverStatus.chunkCount = parseInt(program.args[ 0 ]) as Count<Chunk>

const time = !!program.time

const startTime = now()
populateAndSearchScopesAndPerfectMetrics().then(() => {
    saveLog(
        `\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}` as IO,
        LogTarget.FINAL_SOLVER_RESULTS,
        LFC_SCRIPT_GROUP,
    )

    const endTime = now()
    if (time) {
        saveLog(
            `\n\nFINDING BEST METRICS TOOK ${formatTime(difference(endTime, startTime))}` as IO,
            LogTarget.FINAL_SOLVER_RESULTS,
            LFC_SCRIPT_GROUP,
        )
    }
    saveLog(`MAX UNIT ${lfcScriptGroupSettings.maxUnit}` as IO, LogTarget.FINAL_SOLVER_RESULTS, LFC_SCRIPT_GROUP)
    saveLog(
        `AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}` as IO,
        LogTarget.FINAL_SOLVER_RESULTS,
        LFC_SCRIPT_GROUP,
    )
    saveLog(
        `PARAMETER SCOPES @ ${lfcScriptGroupSettings.noUseless ? "NO USELESS" : "ORIGINAL"} SETTINGS` as IO,
        LogTarget.FINAL_SOLVER_RESULTS,
        LFC_SCRIPT_GROUP,
    )
    saveLog(`Z ${lfcScriptGroupSettings.z}` as IO, LogTarget.FINAL_SOLVER_RESULTS, LFC_SCRIPT_GROUP)
    saveLog(`ONLY TOP ${lfcScriptGroupSettings.onlyTop}` as IO, LogTarget.FINAL_SOLVER_RESULTS, LFC_SCRIPT_GROUP)
})
