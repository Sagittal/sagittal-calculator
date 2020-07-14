import { Combination, Index } from "../../../../../general"
import { ParameterValue, Submetric } from "../../../types"
import { Sample, SamplePoint } from "../types"
import { computeDynamicParameterValueIndices } from "./dynamicParameterValueIndices"
import { DynamicParameter, SubmetricPossibility } from "./types"

const combineSubmetricsPossibilitiesIntoSamples = ({ submetricsPossibilities, dynamicParameters }: { dynamicParameters: DynamicParameter[], submetricsPossibilities: Array<Combination<SubmetricPossibility>>, }): Sample[] => {
    let samples: Sample[] = [{
        submetrics: [] as unknown as Combination<Submetric>,
        samplePoint: [] as unknown as SamplePoint,
    }]

    submetricsPossibilities.forEach((submetricPossibilities: Combination<SubmetricPossibility>, submetricIndex) => {
        const extendedSubmetricCombinations: Sample[] = []

        samples.forEach(({ submetrics, samplePoint }) => {
            submetricPossibilities.forEach((submetricPossibility: SubmetricPossibility) => {
                const dynamicParameterValueIndices: Array<Index<ParameterValue>> = computeDynamicParameterValueIndices({
                    dynamicParameters,
                    submetric: submetricPossibility,
                    submetricIndex: submetricIndex as Index<Submetric>,
                })

                extendedSubmetricCombinations.push({
                    submetrics: [...submetrics, submetricPossibility] as Combination<Submetric>,
                    samplePoint: [...samplePoint, ...dynamicParameterValueIndices] as SamplePoint,
                })
            })
        })

        samples = extendedSubmetricCombinations
    })

    return samples
}

export {
    combineSubmetricsPossibilitiesIntoSamples,
}
