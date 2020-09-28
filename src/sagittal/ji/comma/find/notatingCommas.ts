import {
    Comma,
    computeRationalMonzoFromRatio,
    computeRoughRationalMonzo,
    equalMonzos,
    FIVE_ROUGHNESS,
    invertMonzo,
    NumTypeParameters,
    Ratio,
    RationalMonzo,
} from "../../../../general"
import { computeCommasFrom23FreeRationalMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = <T extends NumTypeParameters>(
    jiPitch: Ratio<T>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    // TODO: yes, see all of this should be conducted at the Num level. just computeRoughRatio, equalRatios,
    //  And even, I think computeCommasFrom23FreeClass!
    //  The monzo in zone thing could also be a ratio in zone I think... but the name should be improved to reflect
    //  How it's searching only by octave equivalence at this point...
    const rationalMonzo = computeRationalMonzoFromRatio(jiPitch)
    const twoThreeFreeRationalMonzo: RationalMonzo<{ rough: 5 }> =
        computeRoughRationalMonzo(rationalMonzo, FIVE_ROUGHNESS) as RationalMonzo<{ rough: 5 }>

    if (equalMonzos(twoThreeFreeRationalMonzo, [])) {
        return computeCommasFrom23FreeRationalMonzo(twoThreeFreeRationalMonzo, options)
    }

    return [
        ...computeCommasFrom23FreeRationalMonzo(twoThreeFreeRationalMonzo, options),
        ...computeCommasFrom23FreeRationalMonzo(invertMonzo(twoThreeFreeRationalMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
