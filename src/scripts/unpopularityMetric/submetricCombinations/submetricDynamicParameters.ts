import { computeParameterPoints } from "./parameterPoints"
import { DynamicParameter, Parameter, ParameterConfig, SubmetricConfigs } from "../types"

const computeSubmetricDynamicParameters = (submetricConfigs: SubmetricConfigs = {}, submetricIndex: number): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    (Object.entries(submetricConfigs) as Array<[Parameter, ParameterConfig]>).forEach(([parameter, parameterConfig]: [Parameter, ParameterConfig]) => {
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
