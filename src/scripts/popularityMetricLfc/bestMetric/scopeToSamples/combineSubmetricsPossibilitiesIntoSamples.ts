import {Combination, computeExtensionBase, ExtensionBaseType, Index, Parameter} from "../../../../general"
import {Submetric} from "../../sumOfSquares"
import {computeDynamicParameterValueIndices} from "./dynamicParameterValueIndices"
import {spreadAllBinSubmetricsPossibilitiesAcrossSamples} from "./spreadAllBinSubmetricsPossibilities"
import {CombineSubmetricsPossibilitiesIntoSamplesOptions, Sample, SamplePoint, SubmetricPossibility} from "./types"

const combineSubmetricsPossibilitiesIntoSamples = (
    {submetricsPossibilities, dynamicParameters}: CombineSubmetricsPossibilitiesIntoSamplesOptions,
): Sample[] => {
    // Important to remove the first one before doing the next step
    const allBinSubmetricPossibilities: SubmetricPossibility[] =
        submetricsPossibilities.shift() as Combination<SubmetricPossibility>

    let samples: Sample[] = [{
        submetrics: [] as unknown[] as Combination<Submetric>,
        samplePoint: [] as unknown[] as SamplePoint,
    }]
    submetricsPossibilities
        .forEach((submetricPossibilities: Combination<SubmetricPossibility>, submetricIndex: number): void => {
            const extendedSamples: Sample[] = computeExtensionBase(ExtensionBaseType.ARRAY) as Sample[]

            samples.forEach(({submetrics, samplePoint}: Sample): void => {
                submetricPossibilities.forEach((submetricPossibility: SubmetricPossibility): void => {
                    const dynamicParameterValueIndices: Array<Index<Parameter>> =
                        computeDynamicParameterValueIndices({
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

    return spreadAllBinSubmetricsPossibilitiesAcrossSamples({
        samples,
        allBinSubmetricPossibilities,
        dynamicParameters,
    })
}

export {
    combineSubmetricsPossibilitiesIntoSamples,
}
