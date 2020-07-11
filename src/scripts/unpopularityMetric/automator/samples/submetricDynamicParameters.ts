import { computeParameterPoints } from "./parameterPoints"
import { Parameter, ParameterConfig, SubmetricConfig } from "../../types"
import { DynamicParameter } from "./types"

const computeSubmetricDynamicParameters = (submetricConfig: SubmetricConfig = {}, submetricIndex: number): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricConfigEntries = Object.entries(submetricConfig) as Array<[Parameter, ParameterConfig]>
    submetricConfigEntries.forEach(([parameter, parameterConfig]: [Parameter, ParameterConfig]) => {
        const { count, range } = parameterConfig
        if (typeof parameterConfig === "object" && count && range && count > 1) {
            const parameterPoints = computeParameterPoints(parameterConfig)
            const unit = range / (count - 1)
            submetricDynamicParameters.push({ submetricIndex, parameter, parameterPoints, unit })
        }
    })

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
