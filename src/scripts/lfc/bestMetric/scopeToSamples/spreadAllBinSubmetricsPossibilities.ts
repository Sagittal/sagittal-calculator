import { Combination, Index } from "../../../../general"
import { ParameterValue, Submetric } from "../../sumOfSquares"
import { computeDynamicParameterValueIndices } from "./dynamicParameterValueIndices"
import {
    Sample,
    SamplePoint,
    SpreadAllBinSubmetricsPossibilitiesAcrossSamplesOptions,
    SubmetricPossibility,
} from "./types"

const spreadAllBinSubmetricsPossibilitiesAcrossSamples = (
    options: SpreadAllBinSubmetricsPossibilitiesAcrossSamplesOptions,
) => {
    const {
        dynamicParameters,
        samples,
        allBinSubmetricPossibilities,
    } = options

    const allBinMergedSamples: Sample[] = []

    samples.forEach(({ submetrics, samplePoint }) => {
        allBinSubmetricPossibilities.forEach((allBinSubmetricPossibility: SubmetricPossibility) => {
            const dynamicParameterValueIndices: Array<Index<ParameterValue>> = computeDynamicParameterValueIndices({
                dynamicParameters,
                submetric: allBinSubmetricPossibility,
                submetricIndex: 0 as Index<Submetric>,
            })

            allBinMergedSamples.push({
                submetrics: submetrics.map(submetric => ({
                    ...submetric,
                    ...allBinSubmetricPossibility,
                }) as Submetric) as Combination<Submetric>,
                samplePoint: [...dynamicParameterValueIndices, ...samplePoint] as SamplePoint,
            })
        })
    })

    return allBinMergedSamples
}

export {
    spreadAllBinSubmetricsPossibilitiesAcrossSamples,
}
