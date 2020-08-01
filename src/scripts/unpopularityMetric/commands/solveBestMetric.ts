import * as colors from "colors"
import { program } from "commander"
import { performance } from "perf_hooks"
import { Count } from "../../../general"
import { clearLogs, debug, debugSettings, saveLog } from "../debug"
import { bestMetricsForChunkCount, killedsForChunkCount, solverStatus } from "../globals"
import { Chunk, populateAndSearchScopes, presentBestMetrics } from "../solver"
import { DebugTarget } from "../types"

program
    .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
    .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
    .option("-d, --debug", "debug")
    .option("-c, --no-color", "no color")
    .option("-t, --no-time", "no time")
    .option("-w, --no-write", "no write")
    .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
solverStatus.upperBoundChunkCount = program.upperBoundChunkCount || 8
debug[ DebugTarget.ALL ] = !!program.debug
if (!program.color) {
    colors.disable()
}
const time = !!program.time
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearLogs()
}

solverStatus.populatingChunkCount = lowerBoundChunkCount as Count<Chunk>
solverStatus.searchingChunkCount = lowerBoundChunkCount as Count<Chunk>

debug[ DebugTarget.SOLVER ] = true
debug[ DebugTarget.POPULATION ] = true
// debug[ DebugTarget.LOCAL_MINIMUM ] = true
// debug[ DebugTarget.NEW_BEST_METRIC ] = true
// debug[ DebugTarget.SCOPE ] = true

const startTime = performance.now()
populateAndSearchScopes().then(() => {
    const bestMetricsForNonzeroChunkCounts = bestMetricsForChunkCount.slice(lowerBoundChunkCount, solverStatus.upperBoundChunkCount + 1)
    saveLog(`\n\nAND THE BEST METRICS PER CHUNK COUNT WERE ${JSON.stringify(presentBestMetrics(bestMetricsForNonzeroChunkCounts), undefined, 4)}`, DebugTarget.ALL)
    saveLog(`\n\nAND THE KILLED METRIC COUNTS PER CHUNK COUNT WERE [${killedsForChunkCount.map(abandonedForChunkCount => abandonedForChunkCount.length).join(",")}]`, DebugTarget.ALL)

    const endTime = performance.now()
    if (time) console.log(`\n\nTOOK ${endTime - startTime} MS`)
})
