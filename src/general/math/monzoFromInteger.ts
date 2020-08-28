import { Exponent, Integer, integerDivide, Prime, PRIMES } from "../math"
import { Monzo } from "./types"

const computeMonzoFromInteger = (integer: Integer): Monzo => {
    if (integer === 0) {
        throw new Error("The prime factorization of zero is not defined.")
    }

    const monzo: Monzo = [] as unknown[] as Monzo
    let remnant = integer

    const computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant = (index: number) => {
        const divisor = PRIMES[ index ]
        let remainder = remnant % divisor

        if (remainder === 0) {
            while (monzo.length <= index) {
                monzo.push(0 as Exponent<Prime>)
            }

            while (remainder === 0) {
                remnant = integerDivide(remnant, divisor)
                monzo[ index ] = monzo[ index ] + 1 as Exponent<Prime>
                remainder = remnant % divisor
            }
        }
    }

    for (let index = 0; index <= PRIMES.length - 1; index += 1) {
        computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant(index)

        if (remnant === 1) {
            break
        }
    }

    if (remnant > 1) throw new Error(`This number contains primes which are too big; remainder is ${remnant}`)

    return monzo
}

export {
    computeMonzoFromInteger,
}
