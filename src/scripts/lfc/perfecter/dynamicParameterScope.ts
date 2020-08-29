import { Resolution, Span } from "../../../general"
import { DynamicParameterScope } from "../bestMetric"
import { lfcSettings } from "../globals"
import { ParameterValue } from "../sumOfSquares"

const computeDynamicParameterScopeForPerfecting = (parameterValue: ParameterValue): DynamicParameterScope => ({
    center: parameterValue,
    span: lfcSettings.maxUnit as number as Span<ParameterValue>,
    resolution: 3 as Resolution<ParameterValue>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
