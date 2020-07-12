import { ComputeDynamicParameterValueIndicesParameters, DynamicParameter, DynamicParameterValue } from "./types"
import { Parameter } from "../../types"
import { Index } from "../../../../utilities/types"

const computeDynamicParameterValueIndices = ({ dynamicParameters, submetric, submetricIndex }: ComputeDynamicParameterValueIndicesParameters): Index<DynamicParameterValue>[] => {
    const dynamicParameterValueIndices: Index<DynamicParameterValue>[] = []

    dynamicParameters.forEach((dynamicParameter: DynamicParameter) => {
        if (dynamicParameter.submetricIndex !== submetricIndex) return

        const submetricEntries = Object.entries(submetric) as Array<[Parameter, DynamicParameterValue]>
        submetricEntries.forEach(([parameter, dynamicParameterValue]) => {
            if (dynamicParameter.parameter === parameter) {
                const dynamicParameterValueIndex: Index<DynamicParameterValue> = dynamicParameter.values.indexOf(dynamicParameterValue) as Index<DynamicParameterValue>
                dynamicParameterValueIndices.push(dynamicParameterValueIndex)
            }
        })
    })

    return dynamicParameterValueIndices
}

export {
    computeDynamicParameterValueIndices,
}
