import {Index, isObject, Step} from "../../../../general"
import {computeParameterValues} from "../../../parameterValues"
import {DynamicParameterScope, ParameterValue} from "../../../types"
import {Parameter, Submetric} from "../../sumOfSquares"
import {SubmetricScope} from "../types"
import {DynamicParameter} from "./types"

const computeSubmetricDynamicParameters = (
    submetricScope: SubmetricScope = {} as SubmetricScope,
    submetricIndex: Index<Submetric>,
): DynamicParameter[] => {
    const submetricDynamicParameters: DynamicParameter[] = [] as DynamicParameter[]

    const submetricScopeEntries = Object.entries(submetricScope) as Array<[Parameter, DynamicParameterScope]>
    submetricScopeEntries.forEach(([parameter, parameterScope]: [Parameter, DynamicParameterScope]): void => {
        const {ed, window} = parameterScope
        if (isObject(parameterScope) && ed && window && ed > 1) {
            const values = computeParameterValues(parameterScope)
            const unit = window / (ed - 1) as Step<ParameterValue>
            submetricDynamicParameters.push({submetricIndex, parameter, values, unit})
        }
    })

    return submetricDynamicParameters
}

export {
    computeSubmetricDynamicParameters,
}
