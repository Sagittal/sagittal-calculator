import { increment, isUndefined } from "../../code"
import { Index } from "../../types"
import { dividesEvenly } from "../dividesEvenly"
import { computeIsRoughMonzo } from "./monzo"
import { computeRoughnessIndex } from "./primeCount"
import { PRIMES } from "./primes"
import { computeIsRoughRatio } from "./ratio"
import { integerDivide } from "./typedOperations"
import { Integer, Prime, Primes, Rational, RationalTypeParameters, Roughness } from "./types"

const computeIsRoughInteger = (integer: Integer, roughness: Roughness): boolean => {
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
    while (primeIndex < roughnessIndex) {
        const prime: Integer = PRIMES[ primeIndex ]
        while (dividesEvenly(roughInteger, prime)) {
            roughInteger = integerDivide(roughInteger, prime) as T
        }

        primeIndex = increment(primeIndex)
    }

    return roughInteger
}

const computeIsRoughRational = <S extends Primes, T extends RationalTypeParameters>(
    rational: Rational<T>,
    roughness: S & Roughness,
): rational is Rational<T & { rough: S }> => {
    const { monzo, ratio } = rational

    return (!isUndefined(monzo) && computeIsRoughMonzo(monzo, roughness as S & Integer as S & Roughness)) ||
        (!isUndefined(ratio) && computeIsRoughRatio(ratio, roughness as S & Integer as S & Roughness))
}

export {
    computeIsRoughInteger,
    computeRoughInteger,
    computeIsRoughRational,
}
