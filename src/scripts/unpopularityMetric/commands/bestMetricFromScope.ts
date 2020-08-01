// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import * as colors from "colors"
import { program } from "commander"
import { Span } from "../../../general"
import { clearLogs, debug, debugSettings, saveLog } from "../debug"
import {
    bestMetricsForChunkCount,
    computeResolution,
    DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
    Scope,
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
} from "../solver"
import { DebugTarget, Parameter, ParameterValue } from "../types"

program
    .option("-r, --recursive", "recursive")
    .option("-d, --debug", "debug")
    .option("-m, --maximum-unit", "maximum unit")
    .option("-n, --no-color", "no color")
    .option("-t, --timeout-enabled", "timeout enabled")
    .option("-w, --no-write", "no write")
    .parse(process.argv)

const recurse = !!program.recursive
debug[ DebugTarget.ALL ] = !!program.debug
const maximumUnit = program.maximumUnit
const timeoutEnabled = program.timeoutEnabled
debugSettings.noWrite = !program.write

if (!program.color) {
    colors.disable()
}

if (!debugSettings.noWrite) {
    clearLogs()
}

// debug[ DebugTarget.SCOPE ] = true
// debug[ DebugTarget.ERRORS ] = true
// debug[ DebugTarget.NEW_BEST_METRIC ] = true

const scope = [
    {},
    {
        [ Parameter.SUM ]: true,
        [ Parameter.K_AS_COEFFICIENT ]: {
            center: 1,
            span: 0.02,
            resolution: computeResolution(0.02 as Span<ParameterValue>, { maximumUnit }),
        },
        [ Parameter.A_AS_BASE ]: {
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
    saveLog(`\nbest metric: ${JSON.stringify(bestMetricsForChunkCount[ DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE ])}`, DebugTarget.ALL)
})
