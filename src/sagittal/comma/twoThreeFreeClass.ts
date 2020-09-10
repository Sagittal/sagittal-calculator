import {
    computeJiPitchMonzo,
    computeRoughMonzo,
    computeSuperMonzo,
    computeTrimmedArray,
    Direction,
    FIVE_ROUGHNESS,
    JiPitch,
    Monzo,
} from "../../general"
import { TwoThreeFreeClass } from "../types"

const compute23FreeClass = (jiPitch: JiPitch): TwoThreeFreeClass => {
    const monzo = computeJiPitchMonzo(jiPitch)
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughMonzo(monzo, FIVE_ROUGHNESS)
    const numeratorGreaterThanDenominatorTwoThreeFreeMonzo: Monzo<{ rough: 5, direction: Direction.SUPER }> =
        computeSuperMonzo(twoThreeFreeMonzo)

    return { monzo: computeTrimmedArray(numeratorGreaterThanDenominatorTwoThreeFreeMonzo) } as TwoThreeFreeClass
}

export {
    compute23FreeClass,
}
