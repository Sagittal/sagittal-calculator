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
    .parse(process.argv)

const recurse = !!program.recursive
debug.all = !!program.debug
const maximumUnit = program.maximumUnit
if (!!program.noColors) {
    colors.disable()
}

const scope = [
    {},
    {
        [ Parameter.SUM ]: true,
        [ Parameter.K ]: {
            center: 1,
            span: 0.02,
            resolution: computeResolution(0.02 as Span<ParameterValue>, { maximumUnit }),
        },
        [ Parameter.A ]: {
            center: 2.00001,
            span: 0.02,
            resolution: computeResolution(0.02 as Span<ParameterValue>, { maximumUnit }),
        },
        [ Parameter.A_IS_BASE ]: true,
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

searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(scope, { recurse }).then(() => {
    console.log(`\nbest metric: ${JSON.stringify(bestMetricsForChunkCount[ DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE ])}`.green)
})
