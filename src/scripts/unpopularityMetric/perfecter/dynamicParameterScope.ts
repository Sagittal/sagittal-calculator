import { Resolution, Span } from "../../../general"
import { DynamicParameterScope } from "../bestMetric"
import { ParameterValue } from "../sumOfSquares"
import { unpopularityMetricSettings } from "../globals"

const computeDynamicParameterScopeForPerfecting = (parameterValue: ParameterValue): DynamicParameterScope => ({
    center: parameterValue,
    span: unpopularityMetricSettings.maximumUnit as number as Span<ParameterValue>,
    resolution: 3 as Resolution<ParameterValue>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
