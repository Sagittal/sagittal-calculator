import { computeRatioFromMonzo, computeRoughNumberMonzo, computeSuperMonzo, FIVE_ROUGHNESS, Monzo } from "../../general"
import { TwoThreeFreeClass } from "./types"

const compute23FreeClass = (monzo: Monzo): TwoThreeFreeClass => {
    const twoThreeFreeMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)
    const numeratorGreaterThanDenominatorMonzo = computeSuperMonzo(twoThreeFreeMonzo)
    const twoThreeFreeClass = computeRatioFromMonzo(numeratorGreaterThanDenominatorMonzo) as TwoThreeFreeClass

    return twoThreeFreeClass
}

export {
    compute23FreeClass,
}
