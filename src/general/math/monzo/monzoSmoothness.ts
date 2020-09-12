import { Index } from "../../types"
import { ONE } from "../constants"
import { computeSmoothnessIndex } from "../primeCount"
import { count, sum } from "../typedOperations"
import { NumericTypeParameters, Prime, Primes, Smoothness } from "../types"
import { Monzo } from "./types"

const computeIsSmoothMonzo = <S extends Primes, T extends NumericTypeParameters>(
    monzo: Monzo<Omit<T, "smooth">>,
    smoothness: S & Smoothness,
): monzo is Monzo<T & { smooth: S }> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(monzo)) {
        if (monzo[ smoothnessIndex ] !== 0) return false
        smoothnessIndex = sum(smoothnessIndex, ONE) as Index<Prime>
    }

    return true
}

export {
    computeIsSmoothMonzo,
}
