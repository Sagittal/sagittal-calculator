import { ParameterPoint } from "./types"
import { ParameterConfig } from "../../types"

const computeParameterPoints = (parameterConfig: ParameterConfig): ParameterPoint[] => {
    const {
        center = 0,
        range = 0,
        count = 1,
    }: ParameterConfig = parameterConfig

    if (count === 1) return [center as ParameterPoint]

    const keys = [...Array(count).keys()]

    const offset = center - range / 2

    return keys.map((key): ParameterPoint => {
        const adjustedKey = key * range / (count - 1)

        return offset + adjustedKey as ParameterPoint
    })
}

export {
    computeParameterPoints,
}
