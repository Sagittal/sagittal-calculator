import { computeDynamicParameterValueIndices } from "./dynamicParameterValueIndices"
import { DynamicParameter, Sample, SamplePoint } from "./types"
import { Submetric } from "../../types"
import { Combination, Index } from "../../../../utilities/types"

const combineSubmetricsPossibilitiesIntoSamples = ({ submetricsPossibilities, dynamicParameters }: { submetricsPossibilities: Combination<Submetric>[], dynamicParameters: DynamicParameter[] }): Sample[] => {
    let samples: Sample[] = [{
        submetrics: [] as unknown as Combination<Submetric>,
        point: [] as unknown as SamplePoint,
    }]

    submetricsPossibilities.forEach((submetricPossibilities: Submetric[], submetricIndex) => {
        let extendedSubmetricCombinations: Sample[] = []

        samples.forEach(({ submetrics, point }) => {
            submetricPossibilities.forEach((submetricPossibility: Submetric) => {
                const dynamicParameterValueIndices = computeDynamicParameterValueIndices({
                    dynamicParameters,
                    submetric: submetricPossibility,
                    submetricIndex: submetricIndex as Index<Submetric>,
                })

                extendedSubmetricCombinations.push({
                    submetrics: [...submetrics, submetricPossibility] as Combination<Submetric>,
                    point: [...point, ...dynamicParameterValueIndices] as SamplePoint,
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
