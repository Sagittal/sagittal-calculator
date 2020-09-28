import { increment, indexOfFinalElement } from "../../../../code"
import { NumTypeParameters } from "../../../num"
import { Exponent } from "../../../types"
import { PRIMES } from "../../primes"
import { integerDivide } from "../../typedOperations"
import { Prime } from "../../types"
import { IntegerDecimal, RationalDecimal } from "../decimal"
import { computeRationalQuotientFromRationalDecimal } from "../quotient"
import { computeRationalMonzoFromRationalQuotient } from "./fromQuotient"
import { IntegerMonzo, RationalMonzo } from "./types"

const computeRationalMonzoFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: RationalDecimal<T>,
): RationalMonzo<T> => {
    const quotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalMonzoFromRationalQuotient(quotient) as RationalMonzo<T>
}

// TODO: POSSIBLY MORE PERFORMANT PRIME FACTORIZATION ALGORITHM
//  Consider using Dave's tricky GCP-involved technique
//  Explained here: http://forum.sagittal.org/viewtopic.php?p=2404#p2404
//  And here: http://forum.sagittal.org/viewtopic.php?p=2409#p2409
/*
I can't guarantee it will be faster, but to have a chance of that you'd need to precompute:

maxPrimePower[i] = prime[i]**(Math.floor(53/Math.log2(prime[i])))

so in the repeated calcs you're only doing:

exponent(n, i) = Math.round(math.log(math.gcd(n, maxPrimePower[i]), prime[i]) )

That's more like what I really do in Excel.
 */

const computeIntegerMonzoFromIntegerDecimal = <T extends NumTypeParameters>(
    integerDecimal: IntegerDecimal<T>,
): IntegerMonzo<T> => {
    if (integerDecimal === 0) {
        throw new Error("The prime factorization of zero is not defined.")
    }

    const integerMonzo: IntegerMonzo = [] as unknown[] as IntegerMonzo
    let remnant = integerDecimal

    const computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant = (index: number): void => {
        const divisor = PRIMES[ index ] as IntegerDecimal as IntegerDecimal<T>
        let remainder = remnant % divisor

        if (remainder === 0) {
            while (integerMonzo.length <= index) {
                integerMonzo.push(0 as IntegerDecimal & Exponent<Prime>)
            }

            while (remainder === 0) {
                remnant = integerDivide(remnant, divisor)
                integerMonzo[ index ] = increment(integerMonzo[ index ])
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

    if (remnant > 1) throw new Error(`This integer ${integerDecimal} contains primes which are too big; remainder is ${remnant}`)

    return integerMonzo as IntegerMonzo<T>
}

export {
    computeRationalMonzoFromRationalDecimal,
    computeIntegerMonzoFromIntegerDecimal,
}
