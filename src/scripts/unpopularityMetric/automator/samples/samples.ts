import { combineSubmetricsPossibilitiesIntoSamples } from "./combineSubmetricsPossibilitiesIntoSamples"
import { computeSubmetricPossibilities } from "./submetricPossibilities"
import { DynamicParameter, Sample } from "./types"
import { Submetric, SubmetricSampleConfig } from "../../types"
import { Combination } from "../../../../utilities/types"

const computeSamples = ({ submetricSampleConfigs, dynamicParameters }: { submetricSampleConfigs: SubmetricSampleConfig[], dynamicParameters: DynamicParameter[] }): Sample[] => {
    const submetricsPossibilities: Combination<Submetric>[] = submetricSampleConfigs.map(computeSubmetricPossibilities)

    return combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })
}

export {
    computeSamples,
}
