import * as colors from "colors"
import { program } from "commander"
import { performance } from "perf_hooks"
import { Count, Unit } from "../../../general"
import {
    clearDebugLogFiles,
    debugSettings,
    DebugTarget,
    debugTargets,
    saveDebugMessage,
    setDebugTargets,
} from "../debug"
import { bestMetrics, solverStatus, scopesTimedOut } from "../globals"
import { Chunk, populateAndSearchScopesAndPerfectMetrics, presentBestMetrics } from "../solver"

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
// debugTargets[ DebugTarget.LOCAL_MINIMUM ] = true
// debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true
// debugTargets[ DebugTarget.SCOPE ] = true

const startTime = performance.now()
populateAndSearchScopesAndPerfectMetrics().then(() => {
    saveDebugMessage(`\n\nAND THE BEST METRICS WERE ${JSON.stringify(presentBestMetrics(bestMetrics), undefined, 4)}`, DebugTarget.ALL)
    saveDebugMessage(`\n\nAND THE COUNT OF TIMED OUT METRICS WAS ${scopesTimedOut.length}`, DebugTarget.ALL)

    const endTime = performance.now()
    if (time) saveDebugMessage(`\n\nTOOK ${endTime - startTime} MS`, DebugTarget.ALL)
})
