import { combineSubmetricsPossibilitiesIntoSamples } from "./combineSubmetricsPossibilitiesIntoSamples"
import { computeSubmetricPossibilities } from "./submetricPossibilities"
import { DynamicParameter, Sample, SubmetricPossibility } from "./types"
import { SubmetricScope } from "../../../types"
import { Combination } from "../../../../../utilities/types"

const computeSamples = ({ submetricScopes, dynamicParameters }: { submetricScopes: SubmetricScope[], dynamicParameters: DynamicParameter[] }): Sample[] => {
    const submetricsPossibilities: Combination<SubmetricPossibility>[] = submetricScopes.map(computeSubmetricPossibilities)

    return combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })
}

export {
    computeSamples,
}
