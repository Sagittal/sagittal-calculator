import { computeParameterValues } from "./parameterValues"
import { DynamicParameterScope, DynamicParameterValue, Parameter, Submetric, SubmetricScope } from "../../../types"
import { DynamicParameter } from "./types"
import { Index, Unit } from "../../../../../utilities/types"

const computeSubmetricDynamicParameters = (submetricScope: SubmetricScope = {}, submetricIndex: Index<Submetric>): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricScopeEntries = Object.entries(submetricScope) as Array<[Parameter, DynamicParameterScope]>
    submetricScopeEntries.forEach(([parameter, parameterScope]: [Parameter, DynamicParameterScope]) => {
        const { resolution, span } = parameterScope
        if (typeof parameterScope === "object" && resolution && span && resolution > 1) {
            const values = computeParameterValues(parameterScope)
            const unit = span / (resolution - 1) as Unit<DynamicParameterValue>
            submetricDynamicParameters.push({ submetricIndex, parameter, values, unit })
        }
    })

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
