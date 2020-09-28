import {
    computeNumFromMonzo,
    computeTrimmedArray,
    equalMonzos,
    Exponent,
    Integer,
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

const computeMonzoInZone = (twoFreeMonzo: RationalMonzo<{ rough: 3 }>, zone: Zone): Maybe<RationalMonzo> => {
    const [lowerBound, upperBound] = zone

    const monzoInZone = shallowClone(twoFreeMonzo)

    if (!equalMonzos(monzoInZone, [] as unknown[] as RationalMonzo)) {
        while (numIsHigher(computeNumFromMonzo(monzoInZone), upperBound)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] - 1 as Integer & Exponent<Prime>
        }
        while (numIsLower(computeNumFromMonzo(monzoInZone), lowerBound)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] + 1 as Integer & Exponent<Prime>
        }
    }

    return (
        numIsHigherOrEqual(computeNumFromMonzo(monzoInZone), lowerBound) &&
        numIsLowerOrEqual(computeNumFromMonzo(monzoInZone), upperBound)
    ) ?
        computeTrimmedArray(monzoInZone) :
        undefined
}

export {
    computeMonzoInZone,
}
