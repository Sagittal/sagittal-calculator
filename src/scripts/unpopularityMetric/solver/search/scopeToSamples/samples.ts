import { Combination } from "../../../../../general"
import { SubmetricScope } from "../../types"
import { Sample } from "../types"
import { combineSubmetricsPossibilitiesIntoSamples } from "./combineSubmetricsPossibilitiesIntoSamples"
import { computeSubmetricPossibilities } from "./submetricPossibilities"
import { DynamicParameter, SubmetricPossibility } from "./types"

const computeSamples = ({ submetricScopes, dynamicParameters }: { dynamicParameters: DynamicParameter[], submetricScopes: SubmetricScope[], }): Sample[] => {
    const submetricsPossibilities: Array<Combination<SubmetricPossibility>> = submetricScopes.map(computeSubmetricPossibilities)

    return combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })
}

export {
    computeSamples,
}
