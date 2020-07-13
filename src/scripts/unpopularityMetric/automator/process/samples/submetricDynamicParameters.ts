import { computeParameterValues } from "./parameterValues"
import { DynamicParameterSampleConfig, Parameter, Submetric, SubmetricSampleConfig } from "../../../types"
import { DynamicParameter, ParameterUnit } from "./types"
import { Index } from "../../../../../utilities/types"

const computeSubmetricDynamicParameters = (submetricSampleConfig: SubmetricSampleConfig = {}, submetricIndex: Index<Submetric>): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricSampleConfigEntries = Object.entries(submetricSampleConfig) as Array<[Parameter, DynamicParameterSampleConfig]>
    submetricSampleConfigEntries.forEach(([parameter, parameterSampleConfig]: [Parameter, DynamicParameterSampleConfig]) => {
        const { resolution, range } = parameterSampleConfig
        if (typeof parameterSampleConfig === "object" && resolution && range && resolution > 1) {
            const values = computeParameterValues(parameterSampleConfig)
            const unit = range / (resolution - 1) as ParameterUnit
            submetricDynamicParameters.push({ submetricIndex, parameter, values, unit })
        }
    })

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
