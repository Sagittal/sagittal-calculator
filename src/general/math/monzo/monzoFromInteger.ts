import { PRIMES } from "../primes"
import { integerDivide } from "../typedOperations"
import { Exponent, Integer, Prime } from "../types"
import { Direction, Monzo } from "./types"

// TODO: consider using Dave's tricky GCP-involved technique
//  explained here: http://forum.sagittal.org/viewtopic.php?p=2404#p2404
//  and here: http://forum.sagittal.org/viewtopic.php?p=2409#p2409

const computeMonzoFromInteger = (integer: Integer): Monzo<{ direction: Direction.SUPER }> => {
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
                monzo.push(0 as Integer & Exponent<Prime>)
            }

            while (remainder === 0) {
                remnant = integerDivide(remnant, divisor)
                monzo[ index ] = monzo[ index ] + 1 as Integer & Exponent<Prime>
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

    if (remnant > 1) throw new Error(`This integer ${integer} contains primes which are too big; remainder is ${remnant}`)

    return monzo as Monzo<{ direction: Direction.SUPER }>
}

export {
    computeMonzoFromInteger,
}
