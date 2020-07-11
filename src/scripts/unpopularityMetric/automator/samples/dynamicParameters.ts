import { computeSubmetricDynamicParameters } from "./submetricDynamicParameters"
import { SubmetricConfig } from "../../types"
import { Combination } from "../../../../utilities/types"
import { DynamicParameter } from "./types"

const computeDynamicParameters = (submetricConfigs: Combination<SubmetricConfig>): DynamicParameter[] => {
    let dynamicParameters: DynamicParameter[] = []

    submetricConfigs.forEach((submetricConfig: SubmetricConfig, submetricIndex: number) => {
        const submetricDynamicParameters: DynamicParameter[] = computeSubmetricDynamicParameters(submetricConfig, submetricIndex)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

export {
    computeDynamicParameters,
}
