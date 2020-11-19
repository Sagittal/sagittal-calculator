import {LogTarget, Parameter, saveLog, stringify, Window} from "../../../general"
import {computeDynamicParameterScope, Scope} from "../bestMetric"
import {bestMetrics, popularityMetricLfcScriptGroupSettings} from "../globals"
import {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
    recursiveSearchScopeAndMaybeUpdateBestMetricSync,
} from "../perfecter"
import {PopularityParameterId} from "../sumOfSquares"
import {applySharedPopularityMetricLfcScriptSetup} from "./shared"

applySharedPopularityMetricLfcScriptSetup()

const scope = [
    {},
    {
        [PopularityParameterId.SUM]: true,
        [PopularityParameterId.K_AS_COEFFICIENT]: computeDynamicParameterScope({
            center: 1 as Parameter,
            window: 0.02 as Window<{of: Parameter}>,
        }),
        [PopularityParameterId.A_AS_LOGARITHM_BASE]: computeDynamicParameterScope({
            center: 2.00001 as Parameter,
            window: 0.02 as Window<{of: Parameter}>,
        }),
        [PopularityParameterId.Y]: computeDynamicParameterScope({
            center: 2 as Parameter,
            window: 0.04 as Window<{of: Parameter}>,
        }),
        [PopularityParameterId.W]: computeDynamicParameterScope({
            center: -2.00001 as Parameter,
            window: 0.03 as Window<{of: Parameter}>,
        }),
    },
] as Scope

if (popularityMetricLfcScriptGroupSettings.sync) {
    recursiveSearchScopeAndMaybeUpdateBestMetricSync(scope, {onlyBetterThanSopfgtt: false})
    saveLog(`\nbest metric: ${stringify(Object.fromEntries(bestMetrics))}`, LogTarget.FINAL)
} else {
    recursiveSearchScopeAndMaybeUpdateBestMetric(scope, {onlyBetterThanSopfgtt: false}).then((): void => {
        saveLog(`\nbest metric: ${stringify(Object.fromEntries(bestMetrics))}`, LogTarget.FINAL)
    })
}
