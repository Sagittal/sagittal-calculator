import { computeLog, computePrimeCount, Monzo, PRIMES } from "../../../../general"
import { ParameterValue, Submetric } from "../../types"
import { Antivotes } from "../types"

// (sum or count)
// of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (fiveRoughNumberMonzo: Monzo, submetric = {}): Antivotes => {
    const {
        a = 1 as ParameterValue,
        aIsExponent = false,
        aIsBase = false,
        w = 0 as ParameterValue,
        // x = 0 as DynamicParameterValue,
        y = 1 as ParameterValue,
        // v = 0 as DynamicParameterValue,
        // t = 0 as DynamicParameterValue,
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

    return fiveRoughNumberMonzo.reduce(
        (monzoAntivotes: Antivotes, primeExponent, index): Antivotes => {
            if (max && index < fiveRoughNumberMonzo.length - 1) {
                return 0 as Antivotes
            }

            const prime = PRIMES[ index ]

            let adjustedPrime
            let adjustedPrimeExponent

            adjustedPrime = count ?
                1 :
                usePrimeIndex ?
                    computePrimeCount(prime) :
                    prime
            // adjustedPrime = adjustedPrime + x
            adjustedPrime = aIsBase ?
                adjustedPrime >= 1 ?
                    computeLog(adjustedPrime, a) :
                    1 :
                aIsExponent ?
                    adjustedPrime >= 0 ?
                        adjustedPrime ** a :
                        0
                    :
                    adjustedPrime * a
            adjustedPrime = adjustedPrime + w

            if (primeExponent === 0) {
                adjustedPrimeExponent = 0
            } else {
                adjustedPrimeExponent = withoutRepetition ? 1 : Math.abs(primeExponent)
                // adjustedPrimeExponent = adjustedPrimeExponent + t
                adjustedPrimeExponent = adjustedPrimeExponent >= 0 ? adjustedPrimeExponent ** y : 0
                // adjustedPrimeExponent = adjustedPrimeExponent + v
            }

            let primeExponentAntivotes = adjustedPrime * adjustedPrimeExponent
            if (index === 2 && modifiedCount) {
                primeExponentAntivotes = primeExponentAntivotes * 0.5
            }

            if (isNaN(primeExponentAntivotes)) {
                throw new Error(`You got NaN! in submetricAntivotes ${fiveRoughNumberMonzo} ${JSON.stringify(submetric, null, 4)}`)
            }

            return monzoAntivotes + primeExponentAntivotes as Antivotes
        },
        0 as Antivotes,
    )
}

export {
    computeSubmetricAntivotes,
}
