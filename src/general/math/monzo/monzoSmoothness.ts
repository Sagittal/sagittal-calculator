import { Index } from "../../types"
import { computeSmoothnessIndex } from "../primeCount"
import { count } from "../typedOperations"
import { NumericTypeParameters, Prime, Primes, Smoothness } from "../types"
import { Monzo } from "./types"

const computeIsSmoothMonzo = <S extends Primes, T extends NumericTypeParameters>(
    monzo: Monzo<Omit<T, "smooth">>,
    smoothness: S & Smoothness,
): monzo is Monzo<T & { smooth: S }> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(monzo)) {
        if (monzo[ smoothnessIndex ] !== 0) return false
        smoothnessIndex = smoothnessIndex + 1 as Index<Prime>
    }

    return true
}

export {
    computeIsSmoothMonzo,
}
