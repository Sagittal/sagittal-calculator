import {
    computeRoughNumberMonzo,
    computeSuperMonzo,
    computeTrimmedArray,
    Direction,
    FIVE_ROUGHNESS,
    Monzo,
    NumericTypeParameters,
} from "../../general"
import { TwoThreeFreeClass } from "../types"

// TODO: COMMA MONZO RATIO JI these types of things should all be called with rationalPitches, not monzos
//  and have rational pitches be either a monzo, ratio, or both, but not neither
const compute23FreeClass = <T extends NumericTypeParameters = { irrational: true }>(
    monzo: Monzo<T>,
): TwoThreeFreeClass => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)
    const numeratorGreaterThanDenominatorTwoThreeFreeMonzo: Monzo<{ rough: 5, direction: Direction.SUPER }> =
        computeSuperMonzo(twoThreeFreeMonzo)

    return { monzo: computeTrimmedArray(numeratorGreaterThanDenominatorTwoThreeFreeMonzo) } as TwoThreeFreeClass
}

export {
    compute23FreeClass,
}
