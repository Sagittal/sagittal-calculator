import { ComputeParameterPointIndicesParameters, DynamicParameter, ParameterPoint } from "./types"
import { Parameter } from "../../types"

const computeParameterPointIndices = ({ dynamicParameters, submetricPoint, submetricIndex }: ComputeParameterPointIndicesParameters): number[] => {
    const parameterPointIndices: number[] = []

    dynamicParameters.forEach((dynamicParameter: DynamicParameter) => {
        if (dynamicParameter.submetricIndex !== submetricIndex) return

        (Object.entries(submetricPoint) as Array<[Parameter, ParameterPoint]>).forEach(([parameter, parameterPoint]) => {
            if (dynamicParameter.parameter === parameter) {
                const parameterPointIndex = dynamicParameter.parameterPoints.indexOf(parameterPoint)
                parameterPointIndices.push(parameterPointIndex)
            }
        })
    })

    return parameterPointIndices
}

export {
    computeParameterPointIndices,
}
