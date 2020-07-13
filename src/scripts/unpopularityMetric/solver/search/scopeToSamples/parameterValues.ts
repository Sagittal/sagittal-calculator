import { DynamicParameterScope, DynamicParameterValue } from "../../../types"
import { Resolution, Span } from "../../../../../utilities/types"

const computeParameterValues = (parameterScope: DynamicParameterScope): DynamicParameterValue[] => {
    const {
        center = 0 as DynamicParameterValue,
        span = 0 as Span<DynamicParameterValue>,
        resolution = 1 as Resolution<DynamicParameterValue>,
    }: DynamicParameterScope = parameterScope

    if (resolution === 1) return [center as DynamicParameterValue]

    const keys = [...Array(resolution).keys()]

    const offset = center - span / 2

    return keys.map((key): DynamicParameterValue => {
        const adjustedKey = key * span / (resolution - 1)

        return offset + adjustedKey as DynamicParameterValue
    })
}

export {
    computeParameterValues,
}
