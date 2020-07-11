import { combineSubmetricsPoints } from "./combineSubmetricsPoints"
import { computeSubmetricPoints } from "./submetricPoints"
import { DynamicParameter, Sample } from "./types"
import { Combination } from "../../../../utilities/types"
import { SubmetricConfig } from "../../types"

const computeSamples = ({ submetricConfigs, dynamicParameters }: { submetricConfigs: Combination<SubmetricConfig>, dynamicParameters: DynamicParameter[] }): Sample[] => {
    const submetricsPoints = submetricConfigs.map(computeSubmetricPoints)

    return combineSubmetricsPoints({ submetricsPoints, dynamicParameters })
}

export {
    computeSamples,
}
