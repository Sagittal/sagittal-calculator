import {
    Comma,
    computeRationalMonzoFromRational,
    computeRoughRationalMonzo,
    equalRealMonzos,
    FIVE_ROUGHNESS,
    invertRealMonzo,
    NumericProperties,
    Rational,
    RationalMonzo,
} from "../../../../general"
import { computeCommasFrom23FreeRationalMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = <T extends NumericProperties>(
    jiPitch: Rational<T>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    // Todo: DEFER UNTIL AFTER SCALED MONZO
    //  CONDUCT AT REAL LEVEL
    //  Yes, see all of this should be conducted at the real level. just computeRoughRatio, equalRatios,
    //  And even, I think computeCommasFrom23FreeClass!
    //  The monzo in zone thing could also be a rational in zone I think... but the name should be improved to reflect
    //  How it's searching only by octave equivalence at this point...
    const rationalMonzo = computeRationalMonzoFromRational(jiPitch)
    const two3FreeRationalMonzo: RationalMonzo<{ rough: 5 }> =
        computeRoughRationalMonzo(rationalMonzo, FIVE_ROUGHNESS) as RationalMonzo<{ rough: 5 }>

    if (equalRealMonzos(two3FreeRationalMonzo, [])) {
        return computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options)
    }

    return [
        ...computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options),
        ...computeCommasFrom23FreeRationalMonzo(invertRealMonzo(two3FreeRationalMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
