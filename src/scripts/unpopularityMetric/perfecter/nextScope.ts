import { computeDeepClone, Span } from "../../../general"
import { computeResolution, DynamicParameter, SamplePoint, Scope } from "../bestMetric"
import { ParameterValue } from "../sumOfSquares"

const computeNextScope = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], scope: Scope): Scope => {
    const nextScope = computeDeepClone(scope)

    samplePoint.forEach((dynamicParameterValueIndex, index) => {
        const { submetricIndex, parameter, values, unit } = dynamicParameters[ index ]

        const center = values[ dynamicParameterValueIndex ]
        const span: Span<ParameterValue> = unit * (2 / 3) as Span<ParameterValue>
        const resolution = computeResolution(span)

        nextScope[ submetricIndex ][ parameter ] = { center, span, resolution }
    })

    return nextScope
}

export {
    computeNextScope,
}
