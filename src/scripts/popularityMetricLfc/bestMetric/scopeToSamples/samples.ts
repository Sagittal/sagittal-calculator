import {Combination, computePossibilities} from "@sagittal/general"
import {Scope, SubmetricScope} from "../types"
import {combineSubmetricsPossibilitiesIntoSamples} from "./combineSubmetricsPossibilitiesIntoSamples"
import {DynamicParameter, Sample, SubmetricPossibility} from "./types"

const computeSamples = (
    {dynamicParameters, scope}: {dynamicParameters: DynamicParameter[], scope: Scope},
): Sample[] => {
    const submetricsPossibilities: Array<Combination<SubmetricPossibility>> =
        scope.map((submetricScope: SubmetricScope): Combination<SubmetricPossibility> => {
            return computePossibilities(submetricScope) as Combination<SubmetricPossibility>
        })

    return combineSubmetricsPossibilitiesIntoSamples({submetricsPossibilities, dynamicParameters})
}

export {
    computeSamples,
}
