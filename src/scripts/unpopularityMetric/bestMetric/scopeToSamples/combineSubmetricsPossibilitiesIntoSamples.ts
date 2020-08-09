import { Combination, Index } from "../../../../general"
import { ParameterValue, Submetric } from "../../sumOfSquares"
import { computeDynamicParameterValueIndices } from "./dynamicParameterValueIndices"
import { DynamicParameter, Sample, SamplePoint, SubmetricPossibility } from "./types"

const combineSubmetricsPossibilitiesIntoSamples = ({ submetricsPossibilities, dynamicParameters }: { dynamicParameters: DynamicParameter[], submetricsPossibilities: Array<Combination<SubmetricPossibility>> }): Sample[] => {
    let samples: Sample[] = [{
        submetrics: [] as unknown as Combination<Submetric>,
        samplePoint: [] as unknown as SamplePoint,
    }]

    const theAllBinSubmetricPossibilities = submetricsPossibilities.shift() as Combination<SubmetricPossibility>

    submetricsPossibilities.forEach((submetricPossibilities: Combination<SubmetricPossibility>, submetricIndex) => {
        const extendedSamples: Sample[] = []

        samples.forEach(({ submetrics, samplePoint }) => {
            submetricPossibilities.forEach((submetricPossibility: SubmetricPossibility) => {
                const dynamicParameterValueIndices: Array<Index<ParameterValue>> = computeDynamicParameterValueIndices({
                    dynamicParameters,
                    submetric: submetricPossibility,
                    submetricIndex: submetricIndex + 1 as Index<Submetric>,
                })

                extendedSamples.push({
                    submetrics: [...submetrics, submetricPossibility] as Combination<Submetric>,
                    samplePoint: [...samplePoint, ...dynamicParameterValueIndices] as SamplePoint,
                })
            })
        })

        samples = extendedSamples
    })

    const allBinMergedSamples: Sample[] = []

    // TODO: perhaps I should extract this so it's easier to find later
    //  ...is this where we SET the sharedParameters?????
    samples.forEach(({ submetrics, samplePoint }) => {
        theAllBinSubmetricPossibilities.forEach((theAllBinSubmetricPossibility: SubmetricPossibility) => {
            const dynamicParameterValueIndices: Array<Index<ParameterValue>> = computeDynamicParameterValueIndices({
                dynamicParameters,
                submetric: theAllBinSubmetricPossibility,
                submetricIndex: 0 as Index<Submetric>,
            })

            allBinMergedSamples.push({
                submetrics: submetrics.map(submetric => ({ ...submetric, ...theAllBinSubmetricPossibility }) as Submetric) as Combination<Submetric>,
                samplePoint: [...dynamicParameterValueIndices, ...samplePoint] as SamplePoint,
            })
        })
    })

    return allBinMergedSamples
}

export {
    combineSubmetricsPossibilitiesIntoSamples,
}
