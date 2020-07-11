import { combineSubmetricsPoints } from "./combineSubmetricsPoints"
import { computeSubmetricPoints } from "./submetricPoints"
import { MetricConfig, DynamicParameter } from "../types"
import { SubmetricCombination } from "./types"

const computeSubmetricCombinations = ({ metricConfig, dynamicParameters }: { metricConfig: MetricConfig, dynamicParameters: DynamicParameter[] }): SubmetricCombination[] => {
    const submetricsPoints = metricConfig.map(computeSubmetricPoints)

    return combineSubmetricsPoints({ submetricsPoints, dynamicParameters })
}

export {
    computeSubmetricCombinations,
}
