import { computeDeepClone, Span } from "../../../general"
import { ParameterValue } from "../sumOfSquares"
import { computeResolution, DynamicParameter, SamplePoint } from "./scopeToSamples"
import { Scope } from "./types"

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
