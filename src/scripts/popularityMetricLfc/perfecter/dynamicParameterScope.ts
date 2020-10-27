import {Ed, Window} from "../../../general"
import {DynamicParameterScope, ParameterValue} from "../../types"
import {popularityMetricLfcScriptGroupSettings} from "../globals"

const computeDynamicParameterScopeForPerfecting = (parameterValue: ParameterValue): DynamicParameterScope => ({
    center: parameterValue,
    window: popularityMetricLfcScriptGroupSettings.maxUnit as number as Window<ParameterValue>,
    ed: 3 as Ed<ParameterValue>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
