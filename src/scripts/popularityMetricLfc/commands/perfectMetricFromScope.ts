import {LogTarget, saveLog, stringify, Window} from "../../../general"
import {Parameter} from "../../types"
import {computeDynamicParameterScope, Scope} from "../bestMetric"
import {bestMetrics, popularityMetricLfcScriptGroupSettings} from "../globals"
import {
    recursiveSearchScopeAndMaybeUpdateBestMetric,
    recursiveSearchScopeAndMaybeUpdateBestMetricSync,
} from "../perfecter"
import {PopularityParameterId} from "../sumOfSquares"
import {applySharedPopularityMetricLfcCommandSetup} from "./shared"

applySharedPopularityMetricLfcCommandSetup()

const scope = [
    {},
    {
        [PopularityParameterId.SUM]: true,
        [PopularityParameterId.K_AS_COEFFICIENT]: computeDynamicParameterScope({
            center: 1 as Parameter,
            window: 0.02 as Window<Parameter>,
        }),
        [PopularityParameterId.A_AS_LOGARITHM_BASE]: computeDynamicParameterScope({
            center: 2.00001 as Parameter,
            window: 0.02 as Window<Parameter>,
        }),
        [PopularityParameterId.Y]: computeDynamicParameterScope({
            center: 2 as Parameter,
            window: 0.04 as Window<Parameter>,
        }),
        [PopularityParameterId.W]: computeDynamicParameterScope({
            center: -2.00001 as Parameter,
            window: 0.03 as Window<Parameter>,
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
