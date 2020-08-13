import { computeDeepClone, Span } from "../../../general"
import { computeDynamicParameterScope, DynamicParameter, SamplePoint, Scope } from "../bestMetric"
import { ParameterValue } from "../sumOfSquares"

const computeNextScope = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], scope: Scope): Scope => {
    const nextScope = computeDeepClone(scope)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const span: Span<ParameterValue> = unit * (2 / 3) as Span<ParameterValue>

        nextScope[ submetricIndex ][ parameter ] = computeDynamicParameterScope({ center, span })
    })

    return nextScope
}

export {
    computeNextScope,
}
