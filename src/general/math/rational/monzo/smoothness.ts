import { computeTrimmedArray, increment, indexOfFinalElement, isEmpty } from "../../../code"
import { Decimal, Monzo, NumericProperties } from "../../numeric"
import { count } from "../../typedOperations"
import { computeSmoothnessIndex } from "../primeCount"
import { PRIMES } from "../primes"
import { Primes, Smoothness } from "../types"

const isSmoothRationalMonzo = <S extends Primes, T extends NumericProperties>(
    candidateSmoothRationalMonzo: Monzo<T>,
    smoothness: S & Smoothness,
): candidateSmoothRationalMonzo is Monzo<T & { rational: true, smooth: S }> => {
    let smoothnessIndex = computeSmoothnessIndex(smoothness)

    while (smoothnessIndex < count(candidateSmoothRationalMonzo)) {
        if (candidateSmoothRationalMonzo[ smoothnessIndex ] !== 0) return false
        smoothnessIndex = increment(smoothnessIndex)
    }

    return true
}

const computeRationalMonzoSmoothness = (rationalMonzo: Monzo<{ rational: true }>): Smoothness => {
    const trimmedMonzo = computeTrimmedArray(rationalMonzo)

    if (isEmpty(trimmedMonzo)) {
        return 1 as Smoothness
    }

    return PRIMES[ indexOfFinalElement(trimmedMonzo) ] as Decimal<{ integer: true }> as Smoothness
}

export {
    isSmoothRationalMonzo,
    computeRationalMonzoSmoothness,
}
