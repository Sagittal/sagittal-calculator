import {
    computeRoughMonzo,
    computeSuperMonzo,
    computeTrimmedArray,
    Direction,
    FIVE_ROUGHNESS,
    JiPitch,
    Monzo,
} from "../../general"
import { TwoThreeFreeClass } from "../types"

// TODO: COMMA MONZO RATIO JI these types of things should all be called with jiPitches, not monzos
//  and have JI pitches be either a monzo, ratio, or both, but not neither
const compute23FreeClass = ({ monzo }: JiPitch): TwoThreeFreeClass => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughMonzo(monzo, FIVE_ROUGHNESS)
    const numeratorGreaterThanDenominatorTwoThreeFreeMonzo: Monzo<{ rough: 5, direction: Direction.SUPER }> =
        computeSuperMonzo(twoThreeFreeMonzo)

    return { monzo: computeTrimmedArray(numeratorGreaterThanDenominatorTwoThreeFreeMonzo) } as TwoThreeFreeClass
}

export {
    compute23FreeClass,
}
