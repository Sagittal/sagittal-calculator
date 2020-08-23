import { PRIMES } from "../constants"
import { Index, Prime } from "../types"

const computeIsRough = (integer: number, roughness: number) => {
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
