import { increment } from "../../../../code"
import { Monzo, NumTypeParameters } from "../../../num"
import { count } from "../../../typedOperations"
import { computeSmoothnessIndex } from "../../primeCount"
import { Primes, Smoothness } from "../../types"

const isSmoothMonzo = <S extends Primes, T extends NumTypeParameters>(
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
    isSmoothMonzo,
}
