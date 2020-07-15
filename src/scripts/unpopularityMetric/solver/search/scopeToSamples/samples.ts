import { Combination } from "../../../../../general"
import { Scope } from "../../types"
import { Sample } from "../types"
import { combineSubmetricsPossibilitiesIntoSamples } from "./combineSubmetricsPossibilitiesIntoSamples"
import { computeSubmetricPossibilities } from "./submetricPossibilities"
import { DynamicParameter, SubmetricPossibility } from "./types"

const computeSamples = ({ scope, dynamicParameters }: { dynamicParameters: DynamicParameter[], scope: Scope, }): Sample[] => {
    const submetricsPossibilities: Array<Combination<SubmetricPossibility>> = scope.map(computeSubmetricPossibilities)

    return combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })
}

export {
    computeSamples,
}
