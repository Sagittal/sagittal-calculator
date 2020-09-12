import { computeTrimmedArray } from "../../code"
import { Exponent, Integer, Monzo, NumericTypeParameters, Prime, PRIMES } from "../../math"
import { Roughness } from "../types"

const computeRoughMonzo = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends Omit<NumericTypeParameters, "rough">>(
    monzo: Monzo<T>,
    roughness: S & Roughness,
): Monzo<T & { rough: S }> => {
    const roughnessIndex = PRIMES.findIndex(prime => prime as Integer >= roughness)

    return computeTrimmedArray(
        monzo.map((primeExponent: Integer & Exponent<Prime>, index): Integer & Exponent<Prime> =>
        index < roughnessIndex ? 0 as Integer & Exponent<Prime> : primeExponent) as Monzo<T & { rough: S }>
    )
}

const computeIsRoughMonzo = <S extends 2 | 3 | 5 | 7 | 11 | 13 | 17 | 19 | 23 | 29 | 31 | 37 | 41 | 43 | 47,
    T extends Omit<NumericTypeParameters, "rough">>(
    monzo: Monzo<T>,
    roughness: S & Roughness,
): monzo is Monzo<T & { rough: S }> => {
    const roughnessIndex = PRIMES.findIndex(prime => prime as Integer >= roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (monzo[index] !== 0) return false
        index = index + 1
    }

    return true
}

export {
    computeRoughMonzo,
    computeIsRoughMonzo,
}
