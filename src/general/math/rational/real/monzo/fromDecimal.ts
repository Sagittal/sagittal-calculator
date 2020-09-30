import { increment, indexOfFinalElement } from "../../../../code"
import { NumericProperties } from "../../../real"
import { Exponent } from "../../../types"
import { PRIMES } from "../../primes"
import { Prime } from "../../types"
import { IntegerDecimal, integerDivide, RationalDecimal } from "../decimal"
import { computeRationalQuotientFromRationalDecimal } from "../quotient"
import { computeRationalMonzoFromRationalQuotient } from "./fromQuotient"
import { IntegerMonzo, RationalMonzo } from "./types"

const computeRationalMonzoFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: RationalDecimal<T>,
): RationalMonzo<T> => {
    const quotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalMonzoFromRationalQuotient(quotient) as RationalMonzo<T>
}

const computeIntegerMonzoFromIntegerDecimal = <T extends NumericProperties>(
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
