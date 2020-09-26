import {
    computeTrimmedArray,
    equalMonzos,
    Exponent,
    Integer,
    Maybe,
    Monzo,
    numIsHigher,
    numIsHigherOrEqual,
    numIsLower,
    numIsLowerOrEqual,
    Prime,
    shallowClone,
    TWO_PRIME_INDEX,
    Zone,
} from "../../../../general"

const computeMonzoInZone = (twoFreeMonzo: Monzo<{ rough: 3 }>, zone: Zone): Maybe<Monzo> => {
    const [lowerBound, upperBound] = zone

    const monzoInZone = shallowClone(twoFreeMonzo)

    if (!equalMonzos(monzoInZone, [] as Monzo)) {
        // TODO: this isn't ideal how we're making fake pitches to use the available helpers
        while (numIsHigher({ monzo: monzoInZone }, upperBound)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] - 1 as Integer & Exponent<Prime>
        }
        while (numIsLower({ monzo: monzoInZone }, lowerBound)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] + 1 as Integer & Exponent<Prime>
        }
    }

    return (
        numIsHigherOrEqual({ monzo: monzoInZone }, lowerBound) &&
        numIsLowerOrEqual({ monzo: monzoInZone }, upperBound)
    ) ?
        computeTrimmedArray(monzoInZone) :
        undefined
}

export {
    computeMonzoInZone,
}
