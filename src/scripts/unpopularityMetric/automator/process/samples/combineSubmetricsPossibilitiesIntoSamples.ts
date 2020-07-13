import { computeDynamicParameterValueIndices } from "./dynamicParameterValueIndices"
import { DynamicParameter, Sample, SamplePoint, SubmetricPossibility } from "./types"
import { DynamicParameterValue, Submetric } from "../../../types"
import { Combination, Index } from "../../../../../utilities/types"

const combineSubmetricsPossibilitiesIntoSamples = ({ submetricsPossibilities, dynamicParameters }: { submetricsPossibilities: Combination<SubmetricPossibility>[], dynamicParameters: DynamicParameter[] }): Sample[] => {
    let samples: Sample[] = [{
        submetrics: [] as unknown as Combination<Submetric>,
        samplePoint: [] as unknown as SamplePoint,
    }]

    submetricsPossibilities.forEach((submetricPossibilities: Combination<SubmetricPossibility>, submetricIndex) => {
        let extendedSubmetricCombinations: Sample[] = []

        samples.forEach(({ submetrics, samplePoint }) => {
            submetricPossibilities.forEach((submetricPossibility: SubmetricPossibility) => {
                const dynamicParameterValueIndices: Index<DynamicParameterValue>[] = computeDynamicParameterValueIndices({
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
