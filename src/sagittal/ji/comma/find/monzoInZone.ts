import {
    Cents,
    computeCentsFromNumber,
    computeNumberFromMonzo,
    deepEquals,
    Exponent,
    Integer,
    Maybe,
    Monzo,
    Prime,
    TWO_PRIME_INDEX,
    Zone,
} from "../../../../general"

const computeMonzoInZone = (twoFreeMonzo: Monzo<{ rough: 3 }>, zone: Zone): Maybe<Monzo> => {
    const [minCents, maxCents] = zone

    let cents: Cents = computeCentsFromNumber(computeNumberFromMonzo(twoFreeMonzo))

    if (!deepEquals(twoFreeMonzo, [] as Monzo)) {
        while (cents > maxCents) {
            twoFreeMonzo[ TWO_PRIME_INDEX ] = twoFreeMonzo[ TWO_PRIME_INDEX ] - 1 as Integer & Exponent<Prime>
            cents = computeCentsFromNumber(computeNumberFromMonzo(twoFreeMonzo))
        }
        while (cents < minCents) {
            twoFreeMonzo[ TWO_PRIME_INDEX ] = twoFreeMonzo[ TWO_PRIME_INDEX ] + 1 as Integer & Exponent<Prime>
            cents = computeCentsFromNumber(computeNumberFromMonzo(twoFreeMonzo))
        }
    }

    return cents > minCents && cents < maxCents ?
        twoFreeMonzo :
        undefined
}

export {
    computeMonzoInZone,
}
