import { computeParameterValues } from "./parameterValues"
import { Parameter, Submetric, SubmetricConfig } from "../../types"
import { DynamicParameter, DynamicParameterConfig, ParameterUnit } from "./types"
import { Index } from "../../../../utilities/types"

const computeSubmetricDynamicParameters = (submetricConfig: SubmetricConfig = {}, submetricIndex: Index<Submetric>): DynamicParameter[] => {
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
