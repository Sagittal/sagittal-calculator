import { computeTrimmedArray } from "../../code"
import { Monzo, Primes, RationalTypeParameters } from "../../math"
import { computeRoughnessIndex } from "../primeCount"
import { Roughness } from "../types"

const computeRoughMonzo = <S extends Primes, T extends RationalTypeParameters>(
    monzo: Monzo<Omit<T, "rough">>,
    roughness: S & Roughness,
): Monzo<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        monzo.map((primeExponent, index) =>
            index < roughnessIndex ? 0 : primeExponent) as Monzo<T & { rough: S }>,
    )
}

const computeIsRoughMonzo = <S extends Primes, T extends RationalTypeParameters>(
    monzo: Monzo<Omit<T, "rough">>,
    roughness: S & Roughness,
): monzo is Monzo<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (monzo[ index ] !== 0) return false
        index = index + 1
    }

    return true
}

export {
    computeRoughMonzo,
    computeIsRoughMonzo,
}
