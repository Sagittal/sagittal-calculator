import { ComputeParameterValueIndicesParameters, DynamicParameter, DynamicParameterValue } from "./types"
import { Parameter } from "../../types"

// todo: is Index<Submetric> ACTUALLY the index of a submetric though?
//  okay so the submetricIndex is more of a sumbetric id. i don't want the finding to be based on index alone. they truly are combinations

const computeParameterValueIndices = ({ dynamicParameters, submetricValue, submetricIndex }: ComputeParameterValueIndicesParameters): number[] => {
    const parameterPointIndices: number[] = []

    dynamicParameters.forEach((dynamicParameter: DynamicParameter) => {
        if (dynamicParameter.submetricIndex !== submetricIndex) return

        (Object.entries(submetricValue) as Array<[Parameter, DynamicParameterValue]>).forEach(([parameter, parameterPoint]) => {
            if (dynamicParameter.parameter === parameter) {
                const parameterPointIndex = dynamicParameter.values.indexOf(parameterPoint)
                parameterPointIndices.push(parameterPointIndex)
            }
        })
    })

    return parameterPointIndices
}

export {
    computeParameterValueIndices,
}
