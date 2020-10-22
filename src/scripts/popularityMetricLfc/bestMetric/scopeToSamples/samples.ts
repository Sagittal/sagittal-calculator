import {Combination} from "../../../../general"
import {Scope} from "../types"
import {combineSubmetricsPossibilitiesIntoSamples} from "./combineSubmetricsPossibilitiesIntoSamples"
import {computeSubmetricPossibilities} from "./submetricPossibilities"
import {DynamicParameter, Sample, SubmetricPossibility} from "./types"

const computeSamples = (
    {dynamicParameters, scope}: {dynamicParameters: DynamicParameter[], scope: Scope},
): Sample[] => {
    const submetricsPossibilities: Array<Combination<SubmetricPossibility>> = scope.map(computeSubmetricPossibilities)

    return combineSubmetricsPossibilitiesIntoSamples({submetricsPossibilities, dynamicParameters})
}

export {
    computeSamples,
}
