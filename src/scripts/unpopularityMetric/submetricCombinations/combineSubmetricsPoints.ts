import { computeParameterPointIndices } from "./parameterPointIndices"
import { SubmetricCombination, SubmetricPoint } from "./types"
import { Point } from "../automator/types"
import { DynamicParameter, Submetric } from "../types"
import { Combination } from "../../../utilities/types"

const combineSubmetricsPoints = ({ submetricsPoints, dynamicParameters }: {submetricsPoints: SubmetricPoint[][], dynamicParameters: DynamicParameter[]}): SubmetricCombination[] => {
    let submetricCombinations: SubmetricCombination[] = [{ submetrics: [] as unknown as Combination<Submetric>, point: [] as unknown as Point }]

    submetricsPoints.forEach((submetricPoints, submetricIndex) => {
        let extendedSubmetricCombinations: SubmetricCombination[] = []

        submetricCombinations.forEach(({ submetrics, point }) => {
            submetricPoints.forEach((submetricPoint: SubmetricPoint) => {
                const parameterPointIndices = computeParameterPointIndices({
                    dynamicParameters,
                    submetricPoint,
                    submetricIndex,
                })

                extendedSubmetricCombinations.push({
                    submetrics: [...submetrics, submetricPoint] as Combination<Submetric>,
                    point: [...point, ...parameterPointIndices] as Point,
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
