import { computeTrimmedArray, increment } from "../../../../code"
import { NumericProperties } from "../../../real"
import { Exponent } from "../../../types"
import { computeRoughnessIndex } from "../../primeCount"
import { Prime, Primes, Roughness } from "../../types"
import { IntegerDecimal } from "../decimal"
import { RationalMonzo } from "./types"

const computeRoughRationalMonzo = <S extends Primes, T extends NumericProperties>(
    rationalMonzo: RationalMonzo<T>,
    roughness: S & Roughness,
): RationalMonzo<T & { rough: S }> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    return computeTrimmedArray(
        rationalMonzo.map(
            (primeExponent: IntegerDecimal & Exponent<Prime>, index: number): IntegerDecimal & Exponent<Prime> =>
                index < roughnessIndex ?
                    0 as IntegerDecimal & Exponent<Prime> :
                    primeExponent,
        ),
    ) as RationalMonzo<T & { rough: S }>
}

const isRoughRationalMonzo = <S extends Primes, T extends NumericProperties>(
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
