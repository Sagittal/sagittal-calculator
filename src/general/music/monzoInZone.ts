import { Exponent, Integer, Monzo, Prime } from "../math"
import { computeCentsFromMonzo } from "../music"
import { Cents, Zone } from "./types"

const computeMonzoInZone = (threeSlicedMonzo: Monzo<{ slice: 3 }>, zone: Zone) => {
    const [minCents, maxCents] = zone

    const monzo: Monzo = [0, ...threeSlicedMonzo] as Monzo
    let cents: Cents = computeCentsFromMonzo(monzo)
    while (cents > maxCents) {
        monzo[ 0 ] = monzo[ 0 ] - 1 as Integer & Exponent<Prime>
        cents = computeCentsFromMonzo(monzo)
    }
    while (cents < minCents) {
        monzo[ 0 ] = monzo[ 0 ] + 1 as Integer & Exponent<Prime>
        cents = computeCentsFromMonzo(monzo)
    }

    return cents > minCents && cents < maxCents ? monzo : undefined
}

export {
    computeMonzoInZone,
}
