import { Exponent, Monzo, Prime } from "../math"
import { computeCentsFromMonzo } from "../music"
import { CENTS_PER_OCTAVE } from "./constants"
import { Cents, Zone } from "./types"

const computeMonzoInZone = (threeSlicedMonzo: Monzo<3>, zone: Zone) => {
    const [minCents, maxCents] = zone

    if (maxCents - minCents > CENTS_PER_OCTAVE) {
        throw new Error("Cents range must be less than 1200.")
    }

    const monzo: Monzo = [0, ...threeSlicedMonzo] as Monzo
    let cents: Cents = computeCentsFromMonzo(monzo)
    while (cents > maxCents) {
        monzo[ 0 ] = monzo[ 0 ] - 1 as Exponent<Prime>
        cents = computeCentsFromMonzo(monzo)
    }
    while (cents < minCents) {
        monzo[ 0 ] = monzo[ 0 ] + 1 as Exponent<Prime>
        cents = computeCentsFromMonzo(monzo)
    }

    return cents > minCents && cents < maxCents ? monzo : undefined
}

export {
    computeMonzoInZone,
}
