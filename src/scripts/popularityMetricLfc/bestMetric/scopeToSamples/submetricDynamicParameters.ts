import {computeParameterValues, DynamicParameterScope, Index, isObject, Parameter, Step} from "../../../../general"
import {PopularityParameterId, Submetric} from "../../sumOfSquares"
import {SubmetricScope} from "../types"
import {DynamicParameter} from "./types"

const computeSubmetricDynamicParameters = (
    submetricScope: SubmetricScope = {} as SubmetricScope,
    submetricIndex: Index<Submetric>,
): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricScopeEntries =
        Object.entries(submetricScope) as Array<[PopularityParameterId, DynamicParameterScope]>
    submetricScopeEntries.forEach(
        ([parameter, parameterScope]: [PopularityParameterId, DynamicParameterScope]): void => {
            const {ed, window} = parameterScope
            if (isObject(parameterScope) && ed && window && ed > 1) {
                const values = computeParameterValues(parameterScope)
                const unit = window / (ed - 1) as Step<{of: Parameter}>
                submetricDynamicParameters.push({submetricIndex, parameter, values, unit})
            }
        },
    )

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
