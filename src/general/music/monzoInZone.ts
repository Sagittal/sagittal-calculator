import { deepEquals, Maybe } from "../code"
import { Exponent, Integer, Monzo, Prime } from "../math"
import { computeCentsFromMonzo } from "./centsFromMonzo"
import { Cents, Zone } from "./types"

const computeMonzoInZone = (twoFreeMonzo: Monzo<{ rough: 3 }>, zone: Zone): Maybe<Monzo> => {
    const [minCents, maxCents] = zone

    let cents: Cents = computeCentsFromMonzo(twoFreeMonzo)

    if (!deepEquals(twoFreeMonzo, [] as Monzo)) {
        // TODO: this might be better served by a reduce() function per the forum discussions
        while (cents > maxCents) {
            twoFreeMonzo[ 0 ] = twoFreeMonzo[ 0 ] - 1 as Integer & Exponent<Prime>
            cents = computeCentsFromMonzo(twoFreeMonzo)
        }
        while (cents < minCents) {
            twoFreeMonzo[ 0 ] = twoFreeMonzo[ 0 ] + 1 as Integer & Exponent<Prime>
            cents = computeCentsFromMonzo(twoFreeMonzo)
        }
    }

    return cents > minCents && cents < maxCents ?
        twoFreeMonzo :
        undefined
}

export {
    computeMonzoInZone,
}
