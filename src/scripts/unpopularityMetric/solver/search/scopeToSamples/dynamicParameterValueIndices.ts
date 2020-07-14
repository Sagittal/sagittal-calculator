import { Index } from "../../../../../general"
import { Parameter, ParameterValue } from "../../../types"
import { ComputeDynamicParameterValueIndicesOptions, DynamicParameter } from "./types"

const computeDynamicParameterValueIndices = ({ dynamicParameters, submetric, submetricIndex }: ComputeDynamicParameterValueIndicesOptions): Array<Index<ParameterValue>> => {
    const dynamicParameterValueIndices: Array<Index<ParameterValue>> = []

    dynamicParameters.forEach((dynamicParameter: DynamicParameter) => {
        if (dynamicParameter.submetricIndex !== submetricIndex) { return }

        const submetricEntries = Object.entries(submetric) as Array<[Parameter, ParameterValue]>
        submetricEntries.forEach(([parameter, dynamicParameterValue]) => {
            if (dynamicParameter.parameter === parameter) {
                const dynamicParameterValueIndex: Index<ParameterValue> = dynamicParameter.values.indexOf(dynamicParameterValue) as Index<ParameterValue>
                dynamicParameterValueIndices.push(dynamicParameterValueIndex)
            }
        })
    })

    return dynamicParameterValueIndices
}

export {
    computeDynamicParameterValueIndices,
}
