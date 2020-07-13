import { combineSubmetricsPossibilitiesIntoSamples } from "./combineSubmetricsPossibilitiesIntoSamples"
import { computeSubmetricPossibilities } from "./submetricPossibilities"
import { DynamicParameter, Sample, SubmetricPossibility } from "./types"
import { SubmetricSampleConfig } from "../../../types"
import { Combination } from "../../../../../utilities/types"

const computeSamples = ({ submetricSampleConfigs, dynamicParameters }: { submetricSampleConfigs: SubmetricSampleConfig[], dynamicParameters: DynamicParameter[] }): Sample[] => {
    const submetricsPossibilities: Combination<SubmetricPossibility>[] = submetricSampleConfigs.map(computeSubmetricPossibilities)

    return combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })
}

export {
    computeSamples,
}
