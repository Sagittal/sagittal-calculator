import { Io, LogTarget, saveLog, stringify, Window } from "../../../general"
import { computeDynamicParameterScope, Scope } from "../bestMetric"
import { bestMetrics } from "../globals"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "../perfecter"
import { Parameter, ParameterValue } from "../sumOfSquares"
import { applySharedPopularityMetricLfcCommandSetup } from "./shared"

applySharedPopularityMetricLfcCommandSetup()

const scope = [
    {},
    {
        [ Parameter.SUM ]: true,
        [ Parameter.K_AS_COEFFICIENT ]: computeDynamicParameterScope({
            center: 1 as ParameterValue,
            window: 0.02 as Window<ParameterValue>,
        }),
        [ Parameter.A_AS_LOGARITHM_BASE ]: computeDynamicParameterScope({
            center: 2.00001 as ParameterValue,
            window: 0.02 as Window<ParameterValue>,
        }),
        [ Parameter.Y ]: computeDynamicParameterScope({
            center: 2 as ParameterValue,
            window: 0.04 as Window<ParameterValue>,
        }),
        [ Parameter.W ]: computeDynamicParameterScope({
            center: -2.00001 as ParameterValue,
            window: 0.03 as Window<ParameterValue>,
        }),
    },
] as Scope

recursiveSearchScopeAndMaybeUpdateBestMetric(scope, { onlyWinners: false }).then(() => {
    saveLog(`\nbest metric: ${stringify(Object.fromEntries(bestMetrics))}` as Io, LogTarget.ALL)
})
