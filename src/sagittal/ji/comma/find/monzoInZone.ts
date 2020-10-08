import {
    areMonzosEqual,
    computePitchFromMonzo,
    computeTrimmedArray,
    Decimal,
    EMPTY_MONZO,
    Exponent,
    isPitchHigher,
    isPitchHigherOrEqual,
    isPitchLower,
    isPitchLowerOrEqual,
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
        while (isPitchHigher(computePitchFromMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] = rationalMonzoInZone[ TWO_PRIME_INDEX ] - 1 as
                Decimal<{ integer: true }> & Exponent<Prime>
        }
        while (isPitchLower(computePitchFromMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] = rationalMonzoInZone[ TWO_PRIME_INDEX ] + 1 as
                Decimal<{ integer: true }> & Exponent<Prime>
        }
    }

    return (
        isPitchHigherOrEqual(computePitchFromMonzo(rationalMonzoInZone), lowerBound) &&
        isPitchLowerOrEqual(computePitchFromMonzo(rationalMonzoInZone), upperBound)
    ) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
