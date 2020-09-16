import { increment, indexOfFinalElement } from "../../code"
import { PRIMES } from "../primes"
import { integerDivide } from "../typedOperations"
import { Direction, Exponent, Integer, Prime } from "../types"
import { Monzo } from "./types"

// TODO: POSSIBLY MORE PERFORMANT PRIME FACTORIZATION ALGORITHM
//  consider using Dave's tricky GCP-involved technique
//  explained here: http://forum.sagittal.org/viewtopic.php?p=2404#p2404
//  and here: http://forum.sagittal.org/viewtopic.php?p=2409#p2409
/*
I can't guarantee it will be faster, but to have a chance of that you'd need to precompute:

maxPrimePower[i] = prime[i]**(Math.floor(53/Math.log2(prime[i])))

so in the repeated calcs you're only doing:

exponent(n, i) = Math.round(math.log(math.gcd(n, maxPrimePower[i]), prime[i]) )

That's more like what I really do in Excel.
 */

const computeMonzoFromInteger = (integer: Integer): Monzo<{ direction: Direction.SUPER }> => {
    if (integer === 0) {
        throw new Error("The prime factorization of zero is not defined.")
    }

    const monzo: Monzo = [] as unknown[] as Monzo
    let remnant = integer

    const computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant = (index: number): void => {
        const divisor = PRIMES[ index ]
        let remainder = remnant % divisor

        if (remainder === 0) {
            while (monzo.length <= index) {
                monzo.push(0 as Integer & Exponent<Prime>)
            }

            while (remainder === 0) {
                remnant = integerDivide(remnant, divisor)
                monzo[ index ] = increment(monzo[ index ])
                remainder = remnant % divisor
            }
        }
    }

    for (let index = 0; index <= indexOfFinalElement(PRIMES); index += 1) {
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
