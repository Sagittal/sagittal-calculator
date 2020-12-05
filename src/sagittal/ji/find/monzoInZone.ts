import {
    areMonzosEqual, computeLowerAndUpperExclusive,
    computeScamonFromMonzo,
    computeTrimmedArray,
    Decimal,
    EMPTY_MONZO,
    Exponent,
    isScamonGreater,
    isScamonGreaterOrEqual,
    isScamonLesser,
    isScamonLesserOrEqual,
    isUndefined,
    Maybe,
    Monzo,
    Prime,
    shallowClone,
    TWO_PRIME_INDEX,
    Zone,
} from "@sagittal/general"

const computeInZone = (
    rationalMonzoInZone: Monzo<{rational: true, rough: 3}>,
    zone: Zone,
): boolean => {
    const {extrema: [lowerBound, upperBound], exclusive} = zone
    const {lowerExclusive, upperExclusive} = computeLowerAndUpperExclusive(exclusive)

    const aboveLowerBound = isUndefined(lowerBound) ?
        true :
        lowerExclusive ?
            isScamonGreater(computeScamonFromMonzo(rationalMonzoInZone), lowerBound) :
            isScamonGreaterOrEqual(computeScamonFromMonzo(rationalMonzoInZone), lowerBound)

    const belowUpperBound = isUndefined(upperBound) ?
        true :
        upperExclusive ?
            isScamonLesser(computeScamonFromMonzo(rationalMonzoInZone), upperBound) :
            isScamonLesserOrEqual(computeScamonFromMonzo(rationalMonzoInZone), upperBound)

    return aboveLowerBound && belowUpperBound
}

const computeRationalMonzoInZone = (
    twoFreeRationalMonzo: Monzo<{rational: true, rough: 3}>,
    zone: Zone,
): Maybe<Monzo<{rational: true}>> => {
    const {extrema: [lowerBound, upperBound]} = zone

    const rationalMonzoInZone = shallowClone(twoFreeRationalMonzo)

    if (!areMonzosEqual(rationalMonzoInZone, EMPTY_MONZO)) {
        while (!isUndefined(upperBound) && isScamonGreater(computeScamonFromMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[TWO_PRIME_INDEX] = rationalMonzoInZone[TWO_PRIME_INDEX] - 1 as
                Decimal<{integer: true}> & Exponent<Prime>
        }
        while (!isUndefined(lowerBound) && isScamonLesser(computeScamonFromMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[TWO_PRIME_INDEX] = rationalMonzoInZone[TWO_PRIME_INDEX] + 1 as
                Decimal<{integer: true}> & Exponent<Prime>
        }
    }

    return computeInZone(rationalMonzoInZone, zone) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
