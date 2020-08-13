import * as colors from "colors"
import { program } from "commander"
import { performance } from "perf_hooks"
import { Unit } from "../../../general"
import { MAXIMUM_UNIT, Metric } from "../bestMetric"
import {
    clearDebugLogFiles,
    debugSettings,
    DebugTarget,
    debugTargets,
    saveDebugMessage,
    setDebugTargets,
} from "../debug"
import { bestMetrics, solverStatus } from "../globals"
import { perfectMetrics } from "../perfecter"
import { presentBestMetrics } from "../solver"
import { ParameterValue } from "../sumOfSquares"
import { formatTime } from "../../../general/time"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .option("-t, --no-time", "no time")
    .parse(process.argv)

setDebugTargets(program.debugTargets)
if (!program.color) {
    colors.disable()
}
const time = !!program.time
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

debugTargets[ DebugTarget.PERFECT ] = true
debugTargets[ DebugTarget.SEARCH ] = true
debugTargets[ DebugTarget.POPULATE ] = true
debugTargets[ DebugTarget.FINAL_SOLVER_RESULTS ] = true
debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true

solverStatus.maximumUnit = MAXIMUM_UNIT / 10 as Unit<ParameterValue>

const bestMetricsToBePerfected = {
    "{sum}": {
        "sumOfSquares": 0.014206086754420309,
        "submetrics": [
            {
                "sum": true
            }
        ]
    }
} as unknown as Record<string, Metric> // paste things in from 1.txt, 2.txt, etc.

const startTime = performance.now()
perfectMetrics(Object.values(bestMetricsToBePerfected)).then(() => {
    saveDebugMessage(`\n\nTHE PERFECTED METRICS ARE ${JSON.stringify(presentBestMetrics(bestMetrics), undefined, 4)}`, DebugTarget.PERFECT)

    const endTime = performance.now()
    if (time) {
        saveDebugMessage(`\n\nPERFECTING METRICS TOOK ${formatTime(endTime - startTime)}`, DebugTarget.PERFECT)
    }
})
