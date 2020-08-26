import {
    abs,
    Base,
    computePrimeCount,
    FractionalPart,
    isUndefined,
    log,
    Monzo,
    Power,
    PRIMES,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { secondaryParameterOverridesForDenominator } from "./secondaryParameter"

// (sum or count)
// of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (fiveRoughNumberMonzo: Monzo, submetric = {}, fractionalPart?: FractionalPart): Antivotes => {
    const {
        aAsCoefficient = 1 as ParameterValue,
        aAsPowerExponent,
        aAsLogarithmBase,
        aAsPowerBase,
        w = 0 as ParameterValue,
        b,
        x = 0 as ParameterValue,
        u,
        y = 1 as ParameterValue,
        v,
        // s = 0 as ParameterValue,
        // t = 0 as ParameterValue,
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
            adjustedPrime = adjustedPrime + secondaryParameterOverridesForDenominator(x, u, primeExponent, fractionalPart)
            if (!isUndefined(aAsLogarithmBase)) {
                adjustedPrime = adjustedPrime >= 1 ?
                    log(adjustedPrime as Power, aAsLogarithmBase as number as Base) :
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
            adjustedPrime = adjustedPrime + secondaryParameterOverridesForDenominator(w, b, primeExponent, fractionalPart)

            if (primeExponent === 0) {
                adjustedPrimeExponent = 0
            } else {
                adjustedPrimeExponent = withoutRepetition ? 1 : abs(primeExponent)
                // adjustedPrimeExponent = adjustedPrimeExponent + t
                adjustedPrimeExponent = adjustedPrimeExponent >= 0 ?
                    adjustedPrimeExponent ** secondaryParameterOverridesForDenominator(y, v, primeExponent, fractionalPart) :
                    0
                // adjustedPrimeExponent = adjustedPrimeExponent + s
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
