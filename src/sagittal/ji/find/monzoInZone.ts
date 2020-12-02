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
} from "../../../general"

const computeInZone = (
    rationalMonzoInZone: Monzo<{rational: true, rough: 3}>,
    zone: Zone,
    inclusive: boolean,
): boolean => {
    const [lowerBound, upperBound] = zone

    return inclusive ?
        (
            isScamonGreaterOrEqual(computeScamonFromMonzo(rationalMonzoInZone), lowerBound) &&
            isScamonLesserOrEqual(computeScamonFromMonzo(rationalMonzoInZone), upperBound)
        ) :
        (
            isScamonGreater(computeScamonFromMonzo(rationalMonzoInZone), lowerBound) &&
            isScamonLesser(computeScamonFromMonzo(rationalMonzoInZone), upperBound)
        )
}

const computeRationalMonzoInZone = (
    twoFreeRationalMonzo: Monzo<{rational: true, rough: 3}>,
    zone: Zone,
    inclusive: boolean = false,
): Maybe<Monzo<{rational: true}>> => {
    const [lowerBound, upperBound] = zone

    const rationalMonzoInZone = shallowClone(twoFreeRationalMonzo)

    if (!areMonzosEqual(rationalMonzoInZone, EMPTY_MONZO)) {
        while (isScamonGreater(computeScamonFromMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[TWO_PRIME_INDEX] = rationalMonzoInZone[TWO_PRIME_INDEX] - 1 as
                Decimal<{integer: true}> & Exponent<Prime>
        }
        while (isScamonLesser(computeScamonFromMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[TWO_PRIME_INDEX] = rationalMonzoInZone[TWO_PRIME_INDEX] + 1 as
                Decimal<{integer: true}> & Exponent<Prime>
        }
    }

    return computeInZone(rationalMonzoInZone, zone, inclusive) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
