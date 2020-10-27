import {Index} from "../../../../general"
import {Parameter} from "../../../types"
import {PopularityParameterId} from "../../sumOfSquares"
import {DynamicParameter, DynamicParameterValueIndicesOptions} from "./types"

const computeDynamicParameterValueIndices = (
    {dynamicParameters, submetric, submetricIndex}: DynamicParameterValueIndicesOptions,
): Array<Index<Parameter>> => {
    const dynamicParameterValueIndices: Array<Index<Parameter>> = []

    dynamicParameters.forEach((dynamicParameter: DynamicParameter): void => {
        if (dynamicParameter.submetricIndex !== submetricIndex) {
            return
        }

        const submetricEntries = Object.entries(submetric) as Array<[PopularityParameterId, Parameter]>
        submetricEntries.forEach(([parameter, dynamicParameterValue]: [PopularityParameterId, Parameter]): void => {
            if (dynamicParameter.parameter === parameter) {
                const dynamicParameterValueIndex: Index<Parameter> =
                    dynamicParameter.values.indexOf(dynamicParameterValue) as Index<Parameter>
                dynamicParameterValueIndices.push(dynamicParameterValueIndex)
            }
        })
    })

    return dynamicParameterValueIndices
}

export {
    computeDynamicParameterValueIndices,
}
