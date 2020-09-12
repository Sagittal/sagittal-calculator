import { Index } from "../../types"
import { ONE } from "../constants"
import { computeSmoothnessIndex } from "../primeCount"
import { count, sum } from "../typedOperations"
import { NumericTypeParameters, Prime, Smoothness } from "../types"
import { Monzo } from "./types"

const computeIsSmoothMonzo = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends Omit<NumericTypeParameters, "smooth">>(
    monzo: Monzo<T>,
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
