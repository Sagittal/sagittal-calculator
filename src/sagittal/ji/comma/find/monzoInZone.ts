import {
    computeTrimmedArray,
    equalMonzos,
    Exponent,
    Integer,
    MAX_JAVASCRIPT_PRECISION,
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

const computeMonzoInZone = (twoFreeMonzo: Monzo<{ rough: 3 }>, zone: Zone): Maybe<Monzo> => {
    const [lowerBound, upperBound] = zone

    const monzoInZone = shallowClone(twoFreeMonzo)

    if (!equalMonzos(monzoInZone, [] as Monzo)) {
        // TODO: this isn't ideal how we're making fake pitches to use the available helpers
        while (pitchIsHigher({ monzo: monzoInZone }, upperBound, MAX_JAVASCRIPT_PRECISION)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] - 1 as Integer & Exponent<Prime>
        }
        while (pitchIsLower({ monzo: monzoInZone }, lowerBound, MAX_JAVASCRIPT_PRECISION)) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] + 1 as Integer & Exponent<Prime>
        }
    }

    return (
        pitchIsHigherOrEqual({ monzo: monzoInZone }, lowerBound, MAX_JAVASCRIPT_PRECISION) &&
        pitchIsLowerOrEqual({ monzo: monzoInZone }, upperBound, MAX_JAVASCRIPT_PRECISION)
    ) ?
        computeTrimmedArray(monzoInZone) :
        undefined
}

export {
    computeMonzoInZone,
}
