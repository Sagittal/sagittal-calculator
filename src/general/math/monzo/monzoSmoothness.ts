import { SMOOTH_ROUGH_OFFSET } from "../constants"
import { PRIMES } from "../primes"
import { count } from "../typedOperations"
import { Integer, NumericTypeParameters, Smoothness } from "../types"
import { Monzo } from "./types"

const computeIsSmoothMonzo = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends Omit<NumericTypeParameters, "smooth">>(
    monzo: Monzo<T>,
    smoothness: S & Smoothness,
): monzo is Monzo<T & { smooth: S }> => {
    let smoothnessIndex = PRIMES.findIndex(prime => prime as Integer >= smoothness) + SMOOTH_ROUGH_OFFSET

    while (smoothnessIndex < count(monzo)) { // TODO: might be high time for an indexOfLastElement helper
        if (monzo[ smoothnessIndex ] !== 0) return false
        smoothnessIndex = smoothnessIndex + 1
    }

    return true
}

export {
    computeIsSmoothMonzo,
}
