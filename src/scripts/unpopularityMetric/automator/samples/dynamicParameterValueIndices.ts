import { ComputeDynamicParameterValueIndicesParameters, DynamicParameter, DynamicParameterValue } from "./types"
import { Parameter } from "../../types"

const computeDynamicParameterValueIndices = ({ dynamicParameters, submetric, submetricIndex }: ComputeDynamicParameterValueIndicesParameters): number[] => {
    const dynamicParameterValueIndices: number[] = []

    dynamicParameters.forEach((dynamicParameter: DynamicParameter) => {
        if (dynamicParameter.submetricIndex !== submetricIndex) return

        const submetricEntries = Object.entries(submetric) as Array<[Parameter, DynamicParameterValue]>
        submetricEntries.forEach(([parameter, dynamicParameterValue]) => {
            if (dynamicParameter.parameter === parameter) {
                const dynamicParameterValueIndex = dynamicParameter.values.indexOf(dynamicParameterValue)
                dynamicParameterValueIndices.push(dynamicParameterValueIndex)
            }
        })
    })

    return dynamicParameterValueIndices
}

export {
    computeDynamicParameterValueIndices,
}
