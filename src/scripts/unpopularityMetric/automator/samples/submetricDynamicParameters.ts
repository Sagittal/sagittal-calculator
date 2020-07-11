import { computeParameterValues } from "./parameterValues"
import { Parameter, DynamicParameterConfig, SubmetricConfig } from "../../types"
import { DynamicParameter, ParameterUnit } from "./types"
import { Index } from "../../../../utilities/types"

const computeSubmetricDynamicParameters = (submetricConfig: SubmetricConfig = {}, submetricIndex: Index): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricConfigEntries = Object.entries(submetricConfig) as Array<[Parameter, DynamicParameterConfig]>
    submetricConfigEntries.forEach(([parameter, parameterConfig]: [Parameter, DynamicParameterConfig]) => {
        const { resolution, range } = parameterConfig
        if (typeof parameterConfig === "object" && resolution && range && resolution > 1) {
            const values = computeParameterValues(parameterConfig)
            const unit = range / (resolution - 1) as ParameterUnit
            submetricDynamicParameters.push({ submetricIndex, parameter, values, unit })
        }
    })

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
