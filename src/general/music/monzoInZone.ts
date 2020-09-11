import { deepEquals, Maybe } from "../code"
import { Exponent, Integer, Monzo, Prime } from "../math"
import { computeCentsFromJiPitch } from "../music"
import { Cents, Zone } from "./types"

const computeMonzoInZone = (twoFreeMonzo: Monzo<{ rough: 3 }>, zone: Zone): Maybe<Monzo> => {
    const [minCents, maxCents] = zone

    // TODO: COMMA MONZO RATIO JI 
    //  maybe if in the end we have a computeCentsFromJiPitch and also exposed either by monzo or ratio,
    //  go back to using just that
    let cents: Cents = computeCentsFromJiPitch({ monzo: twoFreeMonzo }) 

    if (!deepEquals(twoFreeMonzo, [] as Monzo)) {
        // TODO: this might be better served by a reduce() function per the forum discussions
        while (cents > maxCents) {
            twoFreeMonzo[ 0 ] = twoFreeMonzo[ 0 ] - 1 as Integer & Exponent<Prime>
            cents = computeCentsFromJiPitch({ monzo: twoFreeMonzo })
        }
        while (cents < minCents) {
            twoFreeMonzo[ 0 ] = twoFreeMonzo[ 0 ] + 1 as Integer & Exponent<Prime>
            cents = computeCentsFromJiPitch({ monzo: twoFreeMonzo })
        }
    }

    return cents > minCents && cents < maxCents ?
        twoFreeMonzo :
        undefined
}

export {
    computeMonzoInZone,
}
