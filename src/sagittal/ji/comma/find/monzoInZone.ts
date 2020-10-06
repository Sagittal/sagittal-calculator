import {
    computePitchFromMonzo,
    computeTrimmedArray,
    Decimal,
    equalMonzos,
    Exponent,
    Maybe,
    Monzo,
    pitchIsHigher,
    pitchIsHigherOrEqual,
    pitchIsLower,
    pitchIsLowerOrEqual,
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

    if (!equalMonzos(rationalMonzoInZone, [] as unknown[] as Monzo<{ rational: true }>)) {
        while (pitchIsHigher(computePitchFromMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] = rationalMonzoInZone[ TWO_PRIME_INDEX ] - 1 as
                Decimal<{ integer: true }> & Exponent<Prime>
        }
        while (pitchIsLower(computePitchFromMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] = rationalMonzoInZone[ TWO_PRIME_INDEX ] + 1 as
                Decimal<{ integer: true }> & Exponent<Prime>
        }
    }

    return (
        pitchIsHigherOrEqual(computePitchFromMonzo(rationalMonzoInZone), lowerBound) &&
        pitchIsLowerOrEqual(computePitchFromMonzo(rationalMonzoInZone), upperBound)
    ) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
