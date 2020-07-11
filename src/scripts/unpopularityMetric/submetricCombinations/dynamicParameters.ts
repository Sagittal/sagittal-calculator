import { computeSubmetricDynamicParameters } from "./submetricDynamicParameters"
import { Configs, DynamicParameter, SubmetricConfigs } from "../types"

const computeDynamicParameters = (configs: Configs): DynamicParameter[] => {
    let dynamicParameters: DynamicParameter[] = []

    configs.forEach((submetricConfigs: SubmetricConfigs, submetricIndex: number) => {
        const submetricDynamicParameters: DynamicParameter[] = computeSubmetricDynamicParameters(submetricConfigs, submetricIndex)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

export {
    computeDynamicParameters,
}
