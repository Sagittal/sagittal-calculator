import {
    Cents,
    computeCentsFromNumber,
    computeNumberFromMonzo,
    computeTrimmedArray,
    equalMonzos,
    Exponent,
    Integer,
    Maybe,
    Monzo,
    Prime, shallowClone,
    TWO_PRIME_INDEX,
    Zone,
} from "../../../../general"

const computeMonzoInZone = (twoFreeMonzo: Monzo<{ rough: 3 }>, zone: Zone): Maybe<Monzo> => {
    const [minCents, maxCents] = zone

    const monzoInZone = shallowClone(twoFreeMonzo)

    let cents: Cents = computeCentsFromNumber(computeNumberFromMonzo(monzoInZone))

    if (!equalMonzos(monzoInZone, [] as Monzo)) {
        while (cents > maxCents) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] - 1 as Integer & Exponent<Prime>
            cents = computeCentsFromNumber(computeNumberFromMonzo(monzoInZone))
        }
        while (cents < minCents) {
            monzoInZone[ TWO_PRIME_INDEX ] = monzoInZone[ TWO_PRIME_INDEX ] + 1 as Integer & Exponent<Prime>
            cents = computeCentsFromNumber(computeNumberFromMonzo(monzoInZone))
        }
    }

    return cents >= minCents && cents <= maxCents ?
        computeTrimmedArray(monzoInZone) :
        undefined
}

export {
    computeMonzoInZone,
}
