import { computeParameterPointIndices } from "./parameterPointIndices"
import { SubmetricCombination, SubmetricPoint } from "./types"
import { Coordinate } from "../automator/types"
import { DynamicParameter, Submetric } from "../types"

const combineSubmetricsPoints = ({ submetricsPoints, dynamicParameters }: {submetricsPoints: SubmetricPoint[][], dynamicParameters: DynamicParameter[]}): SubmetricCombination[] => {
    let submetricCombinations: SubmetricCombination[] = [{ submetrics: [], coordinate: [] as unknown as Coordinate }]

    submetricsPoints.forEach((submetricPoints, submetricIndex) => {
        let extendedSubmetricCombinations: SubmetricCombination[] = []

        submetricCombinations.forEach(({ submetrics, coordinate }) => {
            submetricPoints.forEach((submetricPoint: SubmetricPoint) => {
                const parameterPointIndices = computeParameterPointIndices({
                    dynamicParameters,
                    submetricPoint,
                    submetricIndex,
                })

                extendedSubmetricCombinations.push({
                    submetrics: [...submetrics, submetricPoint] as Submetric[],
                    coordinate: [...coordinate, ...parameterPointIndices] as Coordinate,
                })
            })
        })

        submetricCombinations = extendedSubmetricCombinations
    })

    return submetricCombinations
}

export {
    combineSubmetricsPoints,
}
