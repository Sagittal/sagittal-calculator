import { combineSubmetricsPossibilitiesIntoSamples } from "./combineSubmetricsPossibilitiesIntoSamples"
import { computeSubmetricPossibilities } from "./submetricPossibilities"
import { DynamicParameter, Sample } from "./types"
import { Submetric, SubmetricConfig } from "../../types"
import { Combination } from "../../../../utilities/types"

const computeSamples = ({ submetricConfigs, dynamicParameters }: { submetricConfigs: SubmetricConfig[], dynamicParameters: DynamicParameter[] }): Sample[] => {
    const submetricsPossibilities: Combination<Submetric>[] = submetricConfigs.map(computeSubmetricPossibilities)

    return combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })
}

export {
    computeSamples,
}
