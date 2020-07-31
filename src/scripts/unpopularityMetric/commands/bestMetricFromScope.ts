// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import * as colors from "colors"
import { program } from "commander"
import { Span } from "../../../general"
import { debug } from "../debug"
import {
    bestMetricsForChunkCount,
    computeResolution,
    DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
    Scope,
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
} from "../solver"
import { Parameter, ParameterValue } from "../types"

program
    .option("-r, --recursive", "recursive")
    .option("-d, --debug", "debug")
    .option("-m, --maximum-unit", "maximum unit")
    .option("-n, --no-color", "no color")
    .option("-t, --timeout-enabled", "timeout enabled")
    .parse(process.argv)

const recurse = !!program.recursive
debug.all = !!program.debug
const maximumUnit = program.maximumUnit
const timeoutEnabled = program.timeoutEnabled
if (!!program.noColors) {
    colors.disable()
}

// debug.scope = true
// debug.errors = true
// debug.newBestMetric = true

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
    console.log(`\nbest metric: ${JSON.stringify(bestMetricsForChunkCount[ DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE ])}`.green)
})
