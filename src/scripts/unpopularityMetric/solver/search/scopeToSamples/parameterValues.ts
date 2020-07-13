import { SampleRange, SampleResolution } from "./types"
import { DynamicParameterScope, DynamicParameterValue } from "../../../types"

const computeParameterValues = (parameterScope: DynamicParameterScope): DynamicParameterValue[] => {
    const {
        center = 0 as DynamicParameterValue,
        range = 0 as SampleRange,
        resolution = 1 as SampleResolution,
    }: DynamicParameterScope = parameterScope

    if (resolution === 1) return [center as DynamicParameterValue]

    const keys = [...Array(resolution).keys()]

    const offset = center - range / 2

    return keys.map((key): DynamicParameterValue => {
        const adjustedKey = key * range / (resolution - 1)

        return offset + adjustedKey as DynamicParameterValue
    })
}

export {
    computeParameterValues,
}
