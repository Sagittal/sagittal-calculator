import {
    computeRealFromMonzo,
    computeTrimmedArray,
    equalMonzos,
    Exponent,
    IntegerDecimal,
    Maybe,
    Prime,
    RationalMonzo,
    realIsHigher,
    realIsHigherOrEqual,
    realIsLower,
    realIsLowerOrEqual,
    shallowClone,
    TWO_PRIME_INDEX,
    Zone,
} from "../../../../general"

const computeRationalMonzoInZone = (
    twoFreeRationalMonzo: RationalMonzo<{ rough: 3 }>, zone: Zone,
): Maybe<RationalMonzo> => {
    const [lowerBound, upperBound] = zone

    const rationalMonzoInZone = shallowClone(twoFreeRationalMonzo)

    if (!equalMonzos(rationalMonzoInZone, [] as unknown[] as RationalMonzo)) {
        while (realIsHigher(computeRealFromMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] =
                rationalMonzoInZone[ TWO_PRIME_INDEX ] - 1 as IntegerDecimal & Exponent<Prime>
        }
        while (realIsLower(computeRealFromMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] =
                rationalMonzoInZone[ TWO_PRIME_INDEX ] + 1 as IntegerDecimal & Exponent<Prime>
        }
    }

    return (
        realIsHigherOrEqual(computeRealFromMonzo(rationalMonzoInZone), lowerBound) &&
        realIsLowerOrEqual(computeRealFromMonzo(rationalMonzoInZone), upperBound)
    ) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
