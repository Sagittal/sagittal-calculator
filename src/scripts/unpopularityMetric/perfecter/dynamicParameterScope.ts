import { Resolution, Span } from "../../../general"
import { DynamicParameterScope } from "../bestMetric"
import { unpopularityMetricSettings } from "../globals"
import { ParameterValue } from "../sumOfSquares"

const computeDynamicParameterScopeForPerfecting = (parameterValue: ParameterValue): DynamicParameterScope => ({
    center: parameterValue,
    span: unpopularityMetricSettings.maxUnit as number as Span<ParameterValue>,
    resolution: 3 as Resolution<ParameterValue>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
