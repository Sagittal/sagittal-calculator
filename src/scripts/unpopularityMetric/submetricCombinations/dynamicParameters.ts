import { computeSubmetricDynamicParameters } from "./submetricDynamicParameters"
import { MetricConfig, DynamicParameter, SubmetricConfig } from "../types"

const computeDynamicParameters = (metricConfig: MetricConfig): DynamicParameter[] => {
    let dynamicParameters: DynamicParameter[] = []

    metricConfig.forEach((submetricConfig: SubmetricConfig, submetricIndex: number) => {
        const submetricDynamicParameters: DynamicParameter[] = computeSubmetricDynamicParameters(submetricConfig, submetricIndex)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

export {
    computeDynamicParameters,
}
