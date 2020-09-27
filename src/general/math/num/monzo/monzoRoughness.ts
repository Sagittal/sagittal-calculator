import { computeTrimmedArray, increment } from "../../../code"
import { computeRoughnessIndex, Integer, Prime, Primes, Roughness } from "../../rational"
import { Exponent } from "../../types"
import { NumTypeParameters } from "../types"
import { Monzo } from "./types"

const computeRoughMonzo = <S extends Primes, T extends NumTypeParameters>(
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

const isRoughMonzo = <S extends Primes, T extends NumTypeParameters>(
    monzo: Monzo<T>,
    roughness: S & Roughness,
): monzo is Monzo<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (monzo[ index ] !== 0) return false
        index = increment(index)
    }

    return true
}

export {
    computeRoughMonzo,
    isRoughMonzo,
}
