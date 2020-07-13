import { computeParameterValues } from "./parameterValues"
import { DynamicParameterScope, Parameter, Submetric, SubmetricScope } from "../../../types"
import { DynamicParameter, ParameterUnit } from "./types"
import { Index } from "../../../../../utilities/types"

const computeSubmetricDynamicParameters = (submetricScope: SubmetricScope = {}, submetricIndex: Index<Submetric>): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricScopeEntries = Object.entries(submetricScope) as Array<[Parameter, DynamicParameterScope]>
    submetricScopeEntries.forEach(([parameter, parameterScope]: [Parameter, DynamicParameterScope]) => {
        const { resolution, range } = parameterScope
        if (typeof parameterScope === "object" && resolution && range && resolution > 1) {
            const values = computeParameterValues(parameterScope)
            const unit = range / (resolution - 1) as ParameterUnit
            submetricDynamicParameters.push({ submetricIndex, parameter, values, unit })
        }
    })

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
