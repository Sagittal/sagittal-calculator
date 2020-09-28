import { computeTrimmedArray, increment, indexOfFinalElement, isEmpty } from "../../../../code"
import { NumTypeParameters } from "../../../num"
import { count } from "../../../typedOperations"
import { computeSmoothnessIndex } from "../../primeCount"
import { PRIMES } from "../../primes"
import { Primes, Smoothness } from "../../types"
import { IntegerDecimal } from "../decimal"
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

const computeRationalMonzoSmoothness = (rationalMonzo: RationalMonzo): Smoothness => {
    const trimmedMonzo = computeTrimmedArray(rationalMonzo)

    if (isEmpty(trimmedMonzo)) {
        return 1 as Smoothness
    }

    return PRIMES[ indexOfFinalElement(trimmedMonzo) ] as IntegerDecimal as Smoothness
}

export {
    isSmoothRationalMonzo,
    computeRationalMonzoSmoothness,
}
