import { combineSubmetricsPoints } from "./combineSubmetricsPoints"
import { computeSubmetricPoints } from "./submetricPoints"
import { DynamicParameter, SubmetricConfig } from "../types"
import { SubmetricCombination } from "./types"
import { Combination } from "../../../utilities/types"

const computeSubmetricCombinations = ({ submetricConfigs, dynamicParameters }: { submetricConfigs: Combination<SubmetricConfig>, dynamicParameters: DynamicParameter[] }): SubmetricCombination[] => {
    const submetricsPoints = submetricConfigs.map(computeSubmetricPoints)

    return combineSubmetricsPoints({ submetricsPoints, dynamicParameters })
}

export {
    computeSubmetricCombinations,
}
