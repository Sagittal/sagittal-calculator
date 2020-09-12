import { Integer, integerDivide, mod, Prime, PRIMES, Roughness } from "../math"
import { Index } from "../types"

// TODO: should be a type guard once you've made the type which just extends number but which is parameterized
//  by the NumericTypeParameters, as would stuff in neighboring "smoothness" module
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

        index = index + 1 as Index<Prime>
    }

    return isRough
}

const computeRoughInteger = <T extends Integer>(integer: T, roughness: Roughness): T => {
    // TODO: I have this in many places now
    const roughnessIndex = PRIMES.findIndex(prime => prime as Integer >= roughness)

    let roughInteger = integer
    let primeIndex = 0
    while (primeIndex < roughnessIndex) {
        const prime: Integer = PRIMES[ primeIndex ]
        while (mod(roughInteger, prime) === 0) {
            roughInteger = integerDivide(roughInteger, prime) as T
        }

        primeIndex = primeIndex + 1
    }

    return roughInteger
}

export {
    computeIsRoughInteger,
    computeRoughInteger,
}
