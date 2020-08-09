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
debugTargets[ DebugTarget.SCOPE ] = true
debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true

solverStatus.maximumUnit = MAXIMUM_UNIT / 10 as Unit<ParameterValue>

const bestMetricsToBePerfected = {
    "{sum,weightAsPowerExponent},{kAsCoefficient,sum}": {
        "sumOfSquares": 0.009167940167869676,
        "submetrics": [
            {
                "sum": true,
                "weightAsPowerExponent": 1.3728813559322033,
            },
            {
                "sum": true,
                "kAsCoefficient": 0.1111111111111111,
            },
        ],
    },
    "{sum,x},{jAsPowerExponent,sum,x}": {
        "sumOfSquares": 0.009164379963308959,
        "submetrics": [
            {
                "sum": true,
                "x": -0.05084745762711851,
            },
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "x": -0.05084745762711851,
            },
        ],
    },
    "{jAsPowerExponent,sum,x},{sum,x}": {
        "sumOfSquares": 0.009164379963308959,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "x": -0.05084745762711851,
            },
            {
                "sum": true,
                "x": -0.05084745762711851,
            },
        ],
    },
    "{sum,w},{jAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.009164379963308959,
        "submetrics": [
            {
                "sum": true,
                "w": -0.05084745762711851,
            },
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "w": -0.05084745762711851,
            },
        ],
    },
    "{jAsPowerExponent,sum,w},{sum,w}": {
        "sumOfSquares": 0.009164379963308959,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "w": -0.05084745762711851,
            },
            {
                "sum": true,
                "w": -0.05084745762711851,
            },
        ],
    },
    "{jAsPowerExponent,sum,weightAsPowerExponent},{sum,withoutRepetition}": {
        "sumOfSquares": 0.009157344307366708,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "weightAsPowerExponent": 1.1694915254237293,
            },
            {
                "sum": true,
                "withoutRepetition": true,
            },
        ],
    },
    "{jAsPowerExponent,kAsCoefficient,sum,weightAsPowerBase}": {
        "sumOfSquares": 0.009156268437304337,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424,
                "weightAsPowerBase": 2,
            },
        ],
    },
    "{jAsPowerExponent,kAsCoefficient,sum,weightAsPowerExponent}": {
        "sumOfSquares": 0.009156268437304337,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424,
                "weightAsPowerExponent": 1.3728813559322033,
            },
        ],
    },
    "{jAsPowerExponent,kAsCoefficient,sum,weightAsLogarithmBase}": {
        "sumOfSquares": 0.009156268437304337,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424,
                "weightAsLogarithmBase": 2,
            },
        ],
    },
    "{jAsPowerExponent,kAsCoefficient,sum,weightAsCoefficient}": {
        "sumOfSquares": 0.009156268437304337,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424,
                "weightAsCoefficient": 0.1111111111111111,
            },
        ],
    },
    "{jAsPowerExponent,kAsCoefficient,sum}": {
        "sumOfSquares": 0.009156268437304337,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424,
            },
        ],
    },
    "{jAsPowerExponent,kAsCoefficient,sum},{jAsPowerExponent,kAsCoefficient,sum}": {
        "sumOfSquares": 0.009156268437304337,
        "submetrics": [
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424,
            },
            {
                "sum": true,
                "kAsCoefficient": 0.2222222222222222,
                "jAsPowerExponent": 0.6610169491525424,
            },
        ],
    },
    "{sum},{jAsPowerExponent,sum,x}": {
        "sumOfSquares": 0.009155106963149464,
        "submetrics": [
            {
                "sum": true,
            },
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "x": -0.05084745762711851,
            },
        ],
    },
    "{jAsPowerExponent,sum,x},{sum}": {
        "sumOfSquares": 0.009155106963149464,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "x": -0.05084745762711851,
            },
            {
                "sum": true,
            },
        ],
    },
    "{sum},{jAsPowerExponent,sum,w}": {
        "sumOfSquares": 0.009155106963149464,
        "submetrics": [
            {
                "sum": true,
            },
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "w": -0.05084745762711851,
            },
        ],
    },
    "{jAsPowerExponent,sum,w},{sum}": {
        "sumOfSquares": 0.009155106963149464,
        "submetrics": [
            {
                "sum": true,
                "jAsPowerExponent": 1.1694915254237293,
                "w": -0.05084745762711851,
            },
            {
                "sum": true,
            },
        ],
    },
} as unknown as Record<string, Metric> // paste things in from 1.txt, 2.txt, etc.

const startTime = performance.now()
perfectMetrics(Object.values(bestMetricsToBePerfected)).then(() => {
    saveDebugMessage(`\n\nTHE PERFECTED METRICS ARE ${JSON.stringify(presentBestMetrics(bestMetrics), undefined, 4)}`, DebugTarget.PERFECT)

    const endTime = performance.now()
    if (time) {
        saveDebugMessage(`\n\nPERFECTING METRICS TOOK ${endTime - startTime} MS`, DebugTarget.PERFECT)
    }
})
