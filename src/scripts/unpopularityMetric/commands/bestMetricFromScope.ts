// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import * as colors from "colors"
import { program } from "commander"
import { Span } from "../../../general"
import { computeResolution, Scope } from "../bestMetric"
import { clearDebugLogFiles, debugSettings, DebugTarget, saveDebugMessage, setDebugTargets } from "../debug"
import { bestMetrics, solverStatus } from "../globals"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "../perfecter"
import { Parameter, ParameterValue } from "../sumOfSquares"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .option("-m, --maximum-unit", "maximum unit")
    .parse(process.argv)

setDebugTargets(program.debugTargets)
solverStatus.maximumUnit = program.maximumUnit
debugSettings.noWrite = !program.write

if (!program.color) {
    colors.disable()
}

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

// debugTargets[ DebugTarget.ERRORS ] = true
// debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true

const scope = [
    {},
    {
        [ Parameter.SUM ]: true,
        [ Parameter.K_AS_COEFFICIENT ]: {
            center: 1,
            span: 0.02,
            resolution: computeResolution(0.02 as Span<ParameterValue>),
        },
        [ Parameter.A_AS_LOGARITHM_BASE ]: {
            center: 2.00001,
            span: 0.02,
            resolution: computeResolution(0.02 as Span<ParameterValue>),
        },
        [ Parameter.Y ]: {
            center: 2,
            span: 0.04,
            resolution: computeResolution(0.04 as Span<ParameterValue>),
        },
        [ Parameter.W ]: {
            center: -2.00001,
            span: 0.03,
            resolution: computeResolution(0.03 as Span<ParameterValue>),
        },
    },
] as Scope

recursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners: false })

saveDebugMessage(`\nbest metric: ${JSON.stringify(bestMetrics)}`, DebugTarget.ALL)
