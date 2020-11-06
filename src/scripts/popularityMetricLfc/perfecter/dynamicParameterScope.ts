import {DynamicParameterScope, Ed, Parameter, Window} from "../../../general"
import {popularityMetricLfcScriptGroupSettings} from "../globals"

const computeDynamicParameterScopeForPerfecting = (parameterValue: Parameter): DynamicParameterScope => ({
    center: parameterValue,
    window: popularityMetricLfcScriptGroupSettings.maxUnit as number as Window<Parameter>,
    ed: 3 as Ed<Parameter>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
