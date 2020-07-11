import { combineSubmetricsPoints } from "./combineSubmetricsPoints"
import { computeSubmetricPoints } from "./submetricPoints"
import { Configs, DynamicParameter } from "../types"
import { SubmetricCombination } from "./types"

const computeSubmetricCombinations = ({ configs, dynamicParameters }: { configs: Configs, dynamicParameters: DynamicParameter[] }): SubmetricCombination[] => {
    const submetricsPoints = configs.map(computeSubmetricPoints)

    return combineSubmetricsPoints({ submetricsPoints, dynamicParameters })
}

export {
    computeSubmetricCombinations,
}
