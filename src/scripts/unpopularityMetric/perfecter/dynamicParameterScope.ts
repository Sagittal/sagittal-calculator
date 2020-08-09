import { Resolution, Span } from "../../../general"
import { DynamicParameterScope, MAXIMUM_UNIT } from "../bestMetric"
import { ParameterValue } from "../sumOfSquares"

const computeDynamicParameterScopeForPerfecting = (parameterValue: ParameterValue): DynamicParameterScope => ({
    center: parameterValue,
    span: MAXIMUM_UNIT as number as Span<ParameterValue>,
    resolution: 3 as Resolution<ParameterValue>,
})

export {
    computeDynamicParameterScopeForPerfecting,
}
