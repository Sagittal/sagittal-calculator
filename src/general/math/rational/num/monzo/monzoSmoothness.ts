import { increment } from "../../../../code"
import { NumTypeParameters } from "../../../num"
import { count } from "../../../typedOperations"
import { computeSmoothnessIndex } from "../../primeCount"
import { Primes, Smoothness } from "../../types"
import { RationalMonzo } from "./types"

const isSmoothRationalMonzo = <S extends Primes, T extends NumTypeParameters>(
    candidateSmoothRationalMonzo: RationalMonzo<Omit<T, "smooth">>,
    smoothness: S & Smoothness,
): candidateSmoothRationalMonzo is RationalMonzo<T & { smooth: S }> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(candidateSmoothRationalMonzo)) {
        if (candidateSmoothRationalMonzo[ smoothnessIndex ] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

export {
    isSmoothRationalMonzo,
}
