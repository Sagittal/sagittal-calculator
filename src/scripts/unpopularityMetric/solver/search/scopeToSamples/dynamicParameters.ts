import { computeSubmetricDynamicParameters } from "./submetricDynamicParameters"
import { Submetric, SubmetricScope } from "../../../types"
import { Index } from "../../../../../utilities/types"
import { DynamicParameter } from "./types"

const computeDynamicParameters = (submetricScopes: SubmetricScope[]): DynamicParameter[] => {
    let dynamicParameters: DynamicParameter[] = []

    submetricScopes.forEach((submetricScope: SubmetricScope, submetricIndex: number) => {
        const submetricDynamicParameters: DynamicParameter[] = computeSubmetricDynamicParameters(submetricScope, submetricIndex as Index<Submetric>)

        dynamicParameters = dynamicParameters.concat(submetricDynamicParameters)
    })

    return dynamicParameters
}

export {
    computeDynamicParameters,
}
