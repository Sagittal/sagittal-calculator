import { increment, isUndefined } from "../../code"
import { Index } from "../../types"
import { dividesEvenly } from "../dividesEvenly"
import { computeRatioFromRationalDecimal, isRoughMonzo, isRoughRatio, NumTypeParameters } from "../num"
import { computeRoughnessIndex } from "./primeCount"
import { PRIMES } from "./primes"
import { integerDivide } from "./typedOperations"
import { Integer, Prime, Primes, RationalNum, Roughness } from "./types"

const isRoughInteger = (integer: Integer, roughness: Roughness): boolean => {
    let isRough = true

    let index = 0 as Index<Prime>
    while (true) {
        const prime = PRIMES[ index ]
        if (prime >= roughness) {
            break
        }

        if (integer % prime === 0) {
            isRough = false
            break
        }

        index = increment(index)
    }

    return isRough
}

const computeRoughInteger = <T extends Integer>(integer: T, roughness: Roughness): T => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let roughInteger = integer
    let primeIndex = 0
    // TODO: maybe i need to have a helper for while loops which enables me to at a flip turn something on
    //  to have them report their condition if the suite is hanging so i can figure out which one is the offender
    while (primeIndex < roughnessIndex) {
        const prime: Integer = PRIMES[ primeIndex ]
        while (dividesEvenly(roughInteger, prime)) {
            roughInteger = integerDivide(roughInteger, prime) as T
        }

        primeIndex = increment(primeIndex)
    }

    return roughInteger
}

// TODO: perhaps these roughness and smoothnesses should be broken up into num/decimal and num/
const isRoughRationalNum = <S extends Primes, T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
    roughness: S & Roughness,
): rationalNum is RationalNum<T & { rough: S }> => {
    const { monzo, ratio, decimal } = rationalNum

    if (isUndefined(monzo) && isUndefined(ratio) && !isUndefined(decimal)) {
        return isRoughRatio(
            computeRatioFromRationalDecimal(decimal),
            roughness as S & Integer as S & Roughness,
        )
    }

    return (!isUndefined(monzo) && isRoughMonzo(monzo, roughness as S & Integer as S & Roughness)) ||
        (!isUndefined(ratio) && isRoughRatio(ratio, roughness as S & Integer as S & Roughness))
}

export {
    isRoughInteger,
    computeRoughInteger,
    isRoughRationalNum,
}
