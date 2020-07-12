import { computeSubmetricDynamicParameters } from "./submetricDynamicParameters"
import { Submetric, SubmetricConfig } from "../../types"
import { Index } from "../../../../utilities/types"
import { DynamicParameter } from "./types"

const computeDynamicParameters = (submetricConfigs: SubmetricConfig[]): DynamicParameter[] => {
    let dynamicParameters: DynamicParameter[] = []

    submetricConfigs.forEach((submetricConfig: SubmetricConfig, submetricIndex: number) => {
        const submetricDynamicParameters: DynamicParameter[] = computeSubmetricDynamicParameters(submetricConfig, submetricIndex as Index<Submetric>)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

export {
    computeDynamicParameters,
}
