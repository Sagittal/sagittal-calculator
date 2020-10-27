import {deepClone, Index, Window} from "../../../general"
import {ParameterValue} from "../../types"
import {computeDynamicParameterScope, DynamicParameter, SamplePoint, Scope} from "../bestMetric"

const computeNextScope = (samplePoint: SamplePoint, dynamicParameters: DynamicParameter[], scope: Scope): Scope => {
    const nextScope = deepClone(scope)

    samplePoint.forEach((dynamicParameterValueIndex: Index<ParameterValue>, index: number): void => {
        const {submetricIndex, parameter, values, unit} = dynamicParameters[index]

        const center = values[dynamicParameterValueIndex]
        const window: Window<ParameterValue> = unit * (2 / 3) as Window<ParameterValue>

        nextScope[submetricIndex][parameter] = computeDynamicParameterScope({center, window})
    })

    return nextScope
}

export {
    computeNextScope,
}
