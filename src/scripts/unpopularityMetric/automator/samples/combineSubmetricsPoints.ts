import { computeParameterValueIndices } from "./parameterValueIndices"
import { DynamicParameter, Sample, SamplePoint, SubmetricValue } from "./types"
import { Submetric } from "../../types"
import { Combination, Index } from "../../../../utilities/types"

// todo: is it submetric poitns or values?
const combineSubmetricsPoints = ({ submetricsPoints, dynamicParameters }: { submetricsPoints: SubmetricValue[][], dynamicParameters: DynamicParameter[] }): Sample[] => {
    let samples: Sample[] = [{
        submetrics: [] as unknown as Combination<Submetric>,
        point: [] as unknown as SamplePoint,
    }]

    submetricsPoints.forEach((submetricPoints, submetricIndex) => {
        let extendedSubmetricCombinations: Sample[] = []

        samples.forEach(({ submetrics, point }) => {
            submetricPoints.forEach((submetricPoint: SubmetricValue) => {
                const parameterPointIndices = computeParameterValueIndices({
                    dynamicParameters,
                    submetricValue: submetricPoint,
                    submetricIndex: submetricIndex as Index<Submetric>,
                })

                extendedSubmetricCombinations.push({
                    submetrics: [...submetrics, submetricPoint] as Combination<Submetric>, // todo: I want to get rid of this casting but I can't figure out how at the moment
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
