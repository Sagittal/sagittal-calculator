import {
    computeRealFromRealMonzo,
    computeTrimmedArray,
    equalRealMonzos,
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

    if (!equalRealMonzos(rationalMonzoInZone, [] as unknown[] as RationalMonzo)) {
        while (realIsHigher(computeRealFromRealMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] =
                rationalMonzoInZone[ TWO_PRIME_INDEX ] - 1 as IntegerDecimal & Exponent<Prime>
        }
        while (realIsLower(computeRealFromRealMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] =
                rationalMonzoInZone[ TWO_PRIME_INDEX ] + 1 as IntegerDecimal & Exponent<Prime>
        }
    }

    return (
        realIsHigherOrEqual(computeRealFromRealMonzo(rationalMonzoInZone), lowerBound) &&
        realIsLowerOrEqual(computeRealFromRealMonzo(rationalMonzoInZone), upperBound)
    ) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
