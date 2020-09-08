import { computeRatioFromMonzo, computeRoughNumberMonzo, computeSuperMonzo, FIVE_ROUGHNESS, Monzo } from "../../general"
import { TwoThreeFreeClass } from "./types"

const computeTwoThreeFreeClass = (monzo: Monzo): TwoThreeFreeClass => {
    const twoThreeFreeMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)
    const numeratorGreaterThanDenominatorMonzo = computeSuperMonzo(twoThreeFreeMonzo)

    return computeRatioFromMonzo(numeratorGreaterThanDenominatorMonzo) as TwoThreeFreeClass
}

export {
    computeTwoThreeFreeClass,
}
