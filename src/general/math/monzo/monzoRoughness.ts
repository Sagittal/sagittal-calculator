import { computeTrimmedArray } from "../../code"
import { Exponent, Integer, Monzo, Prime, Primes, RationalTypeParameters } from "../../math"
import { computeRoughnessIndex } from "../primeCount"
import { Roughness } from "../types"

const computeRoughMonzo = <S extends Primes, T extends RationalTypeParameters>(
    monzo: Monzo<T>,    // this used to be Monzo<Omit<T, "rough">> but it wasn't smart enough to preserve Integer-ness
    roughness: S & Roughness,
): Monzo<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        monzo.map(
            (primeExponent: Integer & Exponent<Prime>, index: number): Integer & Exponent<Prime> =>
                index < roughnessIndex ?
                    0 as Integer & Exponent<Prime> :
                    primeExponent,
        ),
    ) as Monzo<T & { rough: S }>
}

const computeIsRoughMonzo = <S extends Primes, T extends RationalTypeParameters>(
    monzo: Monzo<T>,
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
