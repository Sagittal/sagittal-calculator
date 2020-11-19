import {DynamicParameterScope, Ed, Parameter, Window} from "../../../general"
import {popularityMetricLfcScriptGroupSettings} from "../globals"

const computeDynamicParameterScopeForPerfecting = (parameterValue: Parameter): DynamicParameterScope => ({
    center: parameterValue,
    window: popularityMetricLfcScriptGroupSettings.maxUnit as number as Window<{of: Parameter}>,
    ed: 3 as Ed<{of: Parameter}>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
