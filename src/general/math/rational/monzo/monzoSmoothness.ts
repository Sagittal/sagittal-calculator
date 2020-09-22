import { increment } from "../../../code"
import { count } from "../../typedOperations"
import { NumericTypeParameters } from "../../types"
import { computeSmoothnessIndex } from "../primeCount"
import { Primes, Smoothness } from "../types"
import { Monzo } from "./types"

const computeIsSmoothMonzo = <S extends Primes, T extends NumericTypeParameters>(
    monzo: Monzo<Omit<T, "smooth">>,
    smoothness: S & Smoothness,
): monzo is Monzo<T & { smooth: S }> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(monzo)) {
        if (monzo[ smoothnessIndex ] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

export {
    computeIsSmoothMonzo,
}
