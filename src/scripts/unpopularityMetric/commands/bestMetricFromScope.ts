// This script is for developing the improvement to the "SoPF>3" metric. Once developed, it should become part of the analyzeComma script.

import { computeDynamicParameterScope, Scope } from "../bestMetric"
import { DebugTarget, saveDebugMessage } from "../debug"
import { bestMetrics } from "../globals"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "../perfecter"
import { applySharedUnpopularityMetricCommandSetup } from "./shared/shared"
import { Parameter, ParameterValue } from "../sumOfSquares"
import { Span } from "../../../general"

applySharedUnpopularityMetricCommandSetup()

// debugTargets[ DebugTarget.ERRORS ] = true
// debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true

const scope = [
    {},
    {
        [ Parameter.SUM ]: true,
        [ Parameter.K_AS_COEFFICIENT ]: computeDynamicParameterScope({
            center: 1 as ParameterValue,
            span: 0.02 as Span<ParameterValue>,
        }),
        [ Parameter.A_AS_LOGARITHM_BASE ]: computeDynamicParameterScope({
            center: 2.00001 as ParameterValue,
            span: 0.02 as Span<ParameterValue>,
        }),
        [ Parameter.Y ]: computeDynamicParameterScope({
            center: 2 as ParameterValue,
            span: 0.04 as Span<ParameterValue>,
        }),
        [ Parameter.W ]: computeDynamicParameterScope({
            center: -2.00001 as ParameterValue,
            span: 0.03 as Span<ParameterValue>,
        }),
    },
] as Scope

recursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners: false }).then(() => {
    saveDebugMessage(`\nbest metric: ${JSON.stringify(Object.fromEntries(bestMetrics))}`, DebugTarget.ALL)
})
