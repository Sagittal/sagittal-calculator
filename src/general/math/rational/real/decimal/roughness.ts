import { increment } from "../../../../code"
import { Index } from "../../../../types"
import { dividesEvenly } from "../../../dividesEvenly"
import { computeRoughnessIndex } from "../../primeCount"
import { PRIMES } from "../../primes"
import { Prime, Roughness } from "../../types"
import { integerDivide } from "./typedOperations"
import { IntegerDecimal } from "./types"

const isRoughIntegerDecimal = (integerDecimal: IntegerDecimal, roughness: Roughness): boolean => {
    let isRough = true

    let index = 0 as Index<Prime>
    while (true) {
        const prime = PRIMES[ index ]
        if (prime >= roughness) {
            break
        }

        if (integerDecimal % prime === 0) {
            isRough = false
            break
        }

        index = increment(index)
    }

    return isRough
}

const computeRoughIntegerDecimal = <T extends IntegerDecimal>(integerDecimal: T, roughness: Roughness): T => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let roughIntegerDecimal = integerDecimal
    let primeIndex = 0
    while (primeIndex < roughnessIndex) {
        const prime: IntegerDecimal = PRIMES[ primeIndex ]
        while (dividesEvenly(roughIntegerDecimal, prime)) {
            roughIntegerDecimal = integerDivide(roughIntegerDecimal, prime) as T
        }

        primeIndex = increment(primeIndex)
    }

    return roughIntegerDecimal
}

export {
    isRoughIntegerDecimal,
    computeRoughIntegerDecimal,
}
