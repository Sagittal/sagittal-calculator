import { computeTrimmedArray, increment } from "../../../../code"
import { NumTypeParameters } from "../../../num"
import { Exponent } from "../../../types"
import { computeRoughnessIndex } from "../../primeCount"
import { Integer, Prime, Primes, Roughness } from "../../types"
import { RationalMonzo } from "./types"

const computeRoughRationalMonzo = <S extends Primes, T extends NumTypeParameters>(
    rationalMonzo: RationalMonzo<T>,
    roughness: S & Roughness,
): RationalMonzo<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        rationalMonzo.map(
            (primeExponent: Integer & Exponent<Prime>, index: number): Integer & Exponent<Prime> =>
                index < roughnessIndex ?
                    0 as Integer & Exponent<Prime> :
                    primeExponent,
        ),
    ) as RationalMonzo<T & { rough: S }>
}

const isRoughRationalMonzo = <S extends Primes, T extends NumTypeParameters>(
    candidateRoughRationalMonzo: RationalMonzo<T>,
    roughness: S & Roughness,
): candidateRoughRationalMonzo is RationalMonzo<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let index = 0
    while (index < roughnessIndex) {
        if (candidateRoughRationalMonzo[ index ] !== 0) return false
        index = increment(index)
    }

    return true
}

export {
    computeRoughRationalMonzo,
    isRoughRationalMonzo,
}
