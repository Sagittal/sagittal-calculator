import {
    computeRoughNumberMonzo,
    computeSuperMonzo,
    computeTrimmedArray,
    Direction,
    Monzo,
    MonzoTypeParameters,
} from "../../general"
import { TwoThreeFreeClass } from "../types"

const compute23FreeClass = <T extends MonzoTypeParameters = { irrational: true }>(
    monzo: Monzo<T>,
): TwoThreeFreeClass => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughNumberMonzo(monzo, 5)
    const numeratorGreaterThanDenominatorTwoThreeFreeMonzo: Monzo<{ rough: 5, direction: Direction.SUPER }> =
        computeSuperMonzo(twoThreeFreeMonzo)

    return { monzo: computeTrimmedArray(numeratorGreaterThanDenominatorTwoThreeFreeMonzo) } as TwoThreeFreeClass
}

export {
    compute23FreeClass,
}
