import { computeParameterValueIndices } from "./parameterValueIndices"
import { DynamicParameter, SamplePoint, Sample, SubmetricValue } from "./types"
import { Submetric } from "../../types"
import { Combination, Index } from "../../../../utilities/types"

const combineSubmetricsPoints = ({ submetricsPoints, dynamicParameters }: {submetricsPoints: SubmetricValue[][], dynamicParameters: DynamicParameter[]}): Sample[] => {
    let samples: Sample[] = [{ submetrics: [] as unknown as Combination<Submetric>, point: [] as unknown as SamplePoint }]

    submetricsPoints.forEach((submetricPoints, submetricIndex) => {
        let extendedSubmetricCombinations: Sample[] = []

        samples.forEach(({ submetrics, point }) => {
            submetricPoints.forEach((submetricPoint: SubmetricValue) => {
                const parameterPointIndices = computeParameterValueIndices({
                    dynamicParameters,
                    submetricValue: submetricPoint,
                    submetricIndex: submetricIndex as Index,
                })

                extendedSubmetricCombinations.push({
                    submetrics: [...submetrics, submetricPoint] as Combination<Submetric>,
                    point: [...point, ...parameterPointIndices] as SamplePoint,
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
