import {
    areMonzosEqual,
    computeScamonFromMonzo,
    computeTrimmedArray,
    Decimal,
    EMPTY_MONZO,
    Exponent,
    isScamonGreater,
    isScamonGreaterOrEqual,
    isScamonLesser,
    isScamonLesserOrEqual,
    Maybe,
    Monzo,
    Prime,
    shallowClone,
    TWO_PRIME_INDEX,
    Zone,
} from "../../../../general"

const computeRationalMonzoInZone = (
    twoFreeRationalMonzo: Monzo<{ rational: true, rough: 3 }>,
    zone: Zone,
): Maybe<Monzo<{ rational: true }>> => {
    const [lowerBound, upperBound] = zone

    const rationalMonzoInZone = shallowClone(twoFreeRationalMonzo)

    if (!areMonzosEqual(rationalMonzoInZone, EMPTY_MONZO)) {
        while (isScamonGreater(computeScamonFromMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] = rationalMonzoInZone[ TWO_PRIME_INDEX ] - 1 as
                Decimal<{ integer: true }> & Exponent<Prime>
        }
        while (isScamonLesser(computeScamonFromMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] = rationalMonzoInZone[ TWO_PRIME_INDEX ] + 1 as
                Decimal<{ integer: true }> & Exponent<Prime>
        }
    }

    return (
        isScamonGreaterOrEqual(computeScamonFromMonzo(rationalMonzoInZone), lowerBound) &&
        isScamonLesserOrEqual(computeScamonFromMonzo(rationalMonzoInZone), upperBound)
    ) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
