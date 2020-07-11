import { computeParameterPointIndices } from "./parameterPointIndices"
import { Point, Sample, SubmetricPoint } from "./types"
import { DynamicParameter, Submetric } from "../types"
import { Combination } from "../../../utilities/types"

const combineSubmetricsPoints = ({ submetricsPoints, dynamicParameters }: {submetricsPoints: SubmetricPoint[][], dynamicParameters: DynamicParameter[]}): Sample[] => {
    let samples: Sample[] = [{ submetrics: [] as unknown as Combination<Submetric>, point: [] as unknown as Point }]

    submetricsPoints.forEach((submetricPoints, submetricIndex) => {
        let extendedSubmetricCombinations: Sample[] = []

        samples.forEach(({ submetrics, point }) => {
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

        samples = extendedSubmetricCombinations
    })

    return samples
}

export {
    combineSubmetricsPoints,
}
