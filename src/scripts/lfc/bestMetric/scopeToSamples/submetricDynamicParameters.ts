import { Index, Unit } from "../../../../general"
import { Parameter, ParameterValue, Submetric } from "../../sumOfSquares"
import { DynamicParameterScope, SubmetricScope } from "../types"
import { computeParameterValues } from "./parameterValues"
import { DynamicParameter } from "./types"

const computeSubmetricDynamicParameters = (
    submetricScope: SubmetricScope = {} as SubmetricScope,
    submetricIndex: Index<Submetric>,
): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricScopeEntries = Object.entries(submetricScope) as Array<[Parameter, DynamicParameterScope]>
    submetricScopeEntries.forEach(([parameter, parameterScope]: [Parameter, DynamicParameterScope]) => {
        const { resolution, span } = parameterScope
        if (typeof parameterScope === "object" && resolution && span && resolution > 1) {
            const values = computeParameterValues(parameterScope)
            const unit = span / (resolution - 1) as Unit<ParameterValue>
            submetricDynamicParameters.push({ submetricIndex, parameter, values, unit })
        }
    })

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
