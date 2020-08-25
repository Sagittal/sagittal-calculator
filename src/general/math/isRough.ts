import { Integer, Prime, PRIMES } from "../math"
import { Index } from "../types"

const computeIsRough = (integer: Integer, roughness: Integer): boolean => {
    let isRough = true

    let primeIndex = 0 as Index<Prime>
    while (true) {
        const prime = PRIMES[ primeIndex ]
        if (prime >= roughness) {
            break
        }

        if (integer % prime === 0) {
            isRough = false
            break
        }

        primeIndex = primeIndex + 1 as Index<Prime>
    }

    return isRough
}

export {
    computeIsRough,
}
