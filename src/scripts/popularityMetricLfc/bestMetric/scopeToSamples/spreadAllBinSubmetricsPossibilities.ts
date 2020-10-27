import {Combination, Index} from "../../../../general"
import {Parameter} from "../../../types"
import {Submetric} from "../../sumOfSquares"
import {computeDynamicParameterValueIndices} from "./dynamicParameterValueIndices"
import {
    Sample,
    SamplePoint,
    SpreadAllBinSubmetricsPossibilitiesAcrossSamplesOptions,
    SubmetricPossibility,
} from "./types"

const spreadAllBinSubmetricsPossibilitiesAcrossSamples = (
    options: SpreadAllBinSubmetricsPossibilitiesAcrossSamplesOptions,
): Sample[] => {
    const {
        dynamicParameters,
        samples,
        allBinSubmetricPossibilities,
    } = options

    const allBinMergedSamples: Sample[] = []

    samples.forEach(({submetrics, samplePoint}: Sample): void => {
        allBinSubmetricPossibilities.forEach((allBinSubmetricPossibility: SubmetricPossibility): void => {
            const dynamicParameterValueIndices: Array<Index<Parameter>> = computeDynamicParameterValueIndices({
                dynamicParameters,
                submetric: allBinSubmetricPossibility,
                submetricIndex: 0 as Index<Submetric>,
            })

            allBinMergedSamples.push({
                submetrics: submetrics.map((submetric: Submetric): Submetric => ({
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
