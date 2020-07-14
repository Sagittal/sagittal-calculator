import { Index } from "../../../../../general"
import { Submetric } from "../../../types"
import { SubmetricScope } from "../../types"
import { computeSubmetricDynamicParameters } from "./submetricDynamicParameters"
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
