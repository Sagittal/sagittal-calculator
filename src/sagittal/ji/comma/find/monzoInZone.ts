import {
    computeNumFromMonzo,
    computeTrimmedArray,
    equalMonzos,
    Exponent,
    IntegerDecimal,
    Maybe,
    numIsHigher,
    numIsHigherOrEqual,
    numIsLower,
    numIsLowerOrEqual,
    Prime,
    RationalMonzo,
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
        while (numIsHigher(computeNumFromMonzo(rationalMonzoInZone), upperBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] =
                rationalMonzoInZone[ TWO_PRIME_INDEX ] - 1 as IntegerDecimal & Exponent<Prime>
        }
        while (numIsLower(computeNumFromMonzo(rationalMonzoInZone), lowerBound)) {
            rationalMonzoInZone[ TWO_PRIME_INDEX ] =
                rationalMonzoInZone[ TWO_PRIME_INDEX ] + 1 as IntegerDecimal & Exponent<Prime>
        }
    }

    return (
        numIsHigherOrEqual(computeNumFromMonzo(rationalMonzoInZone), lowerBound) &&
        numIsLowerOrEqual(computeNumFromMonzo(rationalMonzoInZone), upperBound)
    ) ?
        computeTrimmedArray(rationalMonzoInZone) :
        undefined
}

export {
    computeRationalMonzoInZone,
}
