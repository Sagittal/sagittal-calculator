import {
    abs,
    Base,
    computePrimeCount,
    Decimal,
    Exponent,
    indexOfFinalElement,
    isUndefined,
    log,
    Monzo,
    Prime,
    PRIMES,
    QuotientPartType,
    stringify,
} from "../../../../general"
import {Parameter} from "../../../types"
import {Antivotes, Submetric} from "../types"
import {secondaryParameterOverride} from "./secondaryParameter"

// (sum or count)
// Of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (
    two3FreeRationalMonzo: Monzo<{rational: true}>,
    submetric: Submetric = {},
    quotientPartType?: QuotientPartType,
): Antivotes => {
    const {
        aAsCoefficient = 1 as Parameter,
        aAsPowerExponent,
        aAsLogarithmBase,
        aAsPowerBase,
        w = 0 as Parameter,
        b,
        x = 0 as Parameter,
        u,
        y = 1 as Parameter,
        v,
        usePrimeIndex = false,
        sum = false,
        count = false,
        max = false,
        withoutRepetition = false,
        modifiedCount = false,
    }: Submetric = submetric

    if (!count && !max && !sum) {
        throw new Error("Attempted to compute antivotes without an operation (sum, count, or max).")
    }

    return two3FreeRationalMonzo.reduce(
        (
            monzoAntivotes: Antivotes,
            primeExponent: Decimal<{integer: true}> & Exponent<Prime>,
            index: number,
        ): Antivotes => {
            if (max && index < indexOfFinalElement(two3FreeRationalMonzo)) {
                return 0 as Antivotes
            }

            const prime = PRIMES[index]

            let adjustedPrime
            let adjustedPrimeExponent

            adjustedPrime = count ?
                1 :
                usePrimeIndex ?
                    computePrimeCount(prime) :
                    prime
            adjustedPrime = adjustedPrime + secondaryParameterOverride(x, u, primeExponent, quotientPartType)
            if (!isUndefined(aAsLogarithmBase)) {
                adjustedPrime = adjustedPrime >= 1 ?
                    log(adjustedPrime, aAsLogarithmBase as number as Base) :
                    1
            }
            if (!isUndefined(aAsPowerExponent)) {
                adjustedPrime = adjustedPrime >= 0 ?
                    adjustedPrime ** aAsPowerExponent :
                    0
            }
            if (!isUndefined(aAsPowerBase)) {
                adjustedPrime = aAsPowerBase ** adjustedPrime
            }
            adjustedPrime = adjustedPrime * aAsCoefficient
            adjustedPrime = adjustedPrime + secondaryParameterOverride(w, b, primeExponent, quotientPartType)

            if (primeExponent === 0) {
                adjustedPrimeExponent = 0
            } else {
                adjustedPrimeExponent = withoutRepetition ? 1 : abs(primeExponent)
                adjustedPrimeExponent = adjustedPrimeExponent >= 0 ?
                    adjustedPrimeExponent ** secondaryParameterOverride(y, v, primeExponent, quotientPartType) :
                    0
            }

            let primeExponentAntivotes = adjustedPrime * adjustedPrimeExponent
            if (index === 2 && modifiedCount) {
                primeExponentAntivotes = primeExponentAntivotes * 0.5
            }

            if (isNaN(primeExponentAntivotes)) {
                throw new Error(`You got NaN! in submetricAntivotes ${two3FreeRationalMonzo} ${stringify(submetric, {multiline: true})}`)
            }

            return monzoAntivotes + primeExponentAntivotes as Antivotes
        },
        0 as Antivotes,
    )
}

export {
    computeSubmetricAntivotes,
}
