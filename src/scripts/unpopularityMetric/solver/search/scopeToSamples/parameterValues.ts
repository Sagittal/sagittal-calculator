import { Resolution, Span } from "../../../../../general"
import { DynamicParameterScope, ParameterValue } from "../../../types"

const computeParameterValues = (parameterScope: DynamicParameterScope): ParameterValue[] => {
    const {
        center = 0 as ParameterValue,
        span = 0 as Span<ParameterValue>,
        resolution = 1 as Resolution<ParameterValue>,
    }: DynamicParameterScope = parameterScope

    if (resolution === 1) {
        return [center as ParameterValue]
    }

    const keys = [...Array(resolution).keys()]

    const offset = center - span / 2

    return keys.map((key): ParameterValue => {
        const adjustedKey = key * span / (resolution - 1)

        return offset + adjustedKey as ParameterValue
    })
}

export {
    computeParameterValues,
}
