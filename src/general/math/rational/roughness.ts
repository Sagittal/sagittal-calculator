import { increment } from "../../code"
import { Index } from "../../types"
import { dividesEvenly } from "../dividesEvenly"
import { computeRoughnessIndex } from "./primeCount"
import { PRIMES } from "./primes"
import { integerDivide } from "./typedOperations"
import { Integer, Prime, Roughness } from "./types"

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
    while (primeIndex < roughnessIndex) {
        const prime: Integer = PRIMES[ primeIndex ]
        while (dividesEvenly(roughInteger, prime)) {
            roughInteger = integerDivide(roughInteger, prime) as T
        }

        primeIndex = increment(primeIndex)
    }

    return roughInteger
}

export {
    isRoughInteger,
    computeRoughInteger,
}
