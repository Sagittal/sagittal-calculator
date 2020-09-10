import { Integer, Prime, PRIMES } from "../math"
import { Index } from "../types"

const computeIsRough = (integer: Integer, roughness: number): boolean => {
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

export {
    computeIsRough,
}
