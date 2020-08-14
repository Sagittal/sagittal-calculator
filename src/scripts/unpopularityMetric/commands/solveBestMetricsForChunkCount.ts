import * as colors from "colors"
import { program } from "commander"
import { performance } from "perf_hooks"
import { Count } from "../../../general"
import {
    clearDebugLogFiles,
    debugSettings,
    DebugTarget,
    debugTargets,
    saveDebugMessage,
    setDebugTargets,
} from "../debug"
import { solverStatus } from "../globals"
import { Chunk, formatBestMetrics, populateAndSearchScopesAndPerfectMetrics, presentBestMetrics } from "../solver"
import { formatTime } from "../../../general/time"
import { MAXIMUM_UNIT } from "../bestMetric/scopeToSamples"
import { CUT_OFF_POPULARITY, ZIPF_EXPONENT } from "../sumOfSquares/constants"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .option("-t, --no-time", "no time")
    .parse(process.argv)

solverStatus.chunkCount = parseInt(program.args[ 0 ]) as Count<Chunk>
setDebugTargets(program.debugTargets)
if (!program.color) {
    colors.disable()
}
const time = !!program.time
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

debugTargets[ DebugTarget.SEARCH ] = true
debugTargets[ DebugTarget.POPULATE ] = true
debugTargets[ DebugTarget.FINAL_SOLVER_RESULTS ] = true
debugTargets[ DebugTarget.PERFECT ] = true

const startTime = performance.now()
populateAndSearchScopesAndPerfectMetrics().then(() => {
    saveDebugMessage(`\n\nAND THE BEST METRICS WERE ${formatBestMetrics()}`, DebugTarget.FINAL_SOLVER_RESULTS)

    const endTime = performance.now()
    if (time) {
        saveDebugMessage(`\n\nFINDING BEST METRICS TOOK ${formatTime(endTime - startTime)}`, DebugTarget.FINAL_SOLVER_RESULTS)
    }
    saveDebugMessage(`MAXIMUM UNIT ${MAXIMUM_UNIT}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`AVERAGE SAMPLES/SCOPE ${solverStatus.averageSamplesPerScope}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`ZIPF ${ZIPF_EXPONENT}`, DebugTarget.FINAL_SOLVER_RESULTS)
    saveDebugMessage(`TOP ${CUT_OFF_POPULARITY}`, DebugTarget.FINAL_SOLVER_RESULTS)
})
