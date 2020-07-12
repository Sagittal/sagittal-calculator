import { computeSubmetricDynamicParameters } from "./submetricDynamicParameters"
import { Submetric, SubmetricSampleConfig } from "../../types"
import { Index } from "../../../../utilities/types"
import { DynamicParameter } from "./types"

const computeDynamicParameters = (submetricSampleConfigs: SubmetricSampleConfig[]): DynamicParameter[] => {
    let dynamicParameters: DynamicParameter[] = []

    submetricSampleConfigs.forEach((submetricSampleConfig: SubmetricSampleConfig, submetricIndex: number) => {
        const submetricDynamicParameters: DynamicParameter[] = computeSubmetricDynamicParameters(submetricSampleConfig, submetricIndex as Index<Submetric>)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

export {
    computeDynamicParameters,
}
