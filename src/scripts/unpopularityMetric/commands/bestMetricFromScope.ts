// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import * as colors from "colors"
import { program } from "commander"
import { Span } from "../../../general"
import {
    computeResolution,
    DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
    Scope,
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
} from "../bestMetric"
import {
    clearDebugLogFiles,
    debugSettings,
    DebugTarget,
    saveDebugMessage,
    setDebugTargets,
} from "../debug"
import { bestMetricsForChunkCount } from "../globals"
import { Parameter, ParameterValue } from "../sumOfSquares"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .option("-m, --maximum-unit", "maximum unit")
    .option("-t, --timeout-enabled", "timeout enabled")
    .parse(process.argv)

const recurse = true
setDebugTargets(program.debugTargets)
const maximumUnit = program.maximumUnit
const timeoutEnabled = program.timeoutEnabled
debugSettings.noWrite = !program.write

if (!program.color) {
    colors.disable()
}

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

// debugTargets[ DebugTarget.SCOPE ] = true
// debugTargets[ DebugTarget.ERRORS ] = true
// debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true

const scope = [
    {},
    {
        [ Parameter.SUM ]: true,
        [ Parameter.K_AS_COEFFICIENT ]: {
            center: 1,
            span: 0.02,
            resolution: computeResolution(0.02 as Span<ParameterValue>, { maximumUnit }),
        },
        [ Parameter.A_AS_LOGARITHM_BASE ]: {
            center: 2.00001,
            span: 0.02,
            resolution: computeResolution(0.02 as Span<ParameterValue>, { maximumUnit }),
        },
        [ Parameter.Y ]: {
            center: 2,
            span: 0.04,
            resolution: computeResolution(0.04 as Span<ParameterValue>, { maximumUnit }),
        },
        [ Parameter.W ]: {
            center: -2.00001,
            span: 0.03,
            resolution: computeResolution(0.03 as Span<ParameterValue>, { maximumUnit }),
        },
    },
] as Scope

searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(scope, { recurse, timeoutEnabled }).then(() => {
    saveDebugMessage(`\nbest metric: ${JSON.stringify(bestMetricsForChunkCount[ DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE ])}`, DebugTarget.ALL)
})
