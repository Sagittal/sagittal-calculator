import {
    abs,
    Base,
    computePrimeCount,
    Exponent,
    FractionalPartType,
    indexOfFinalElement,
    Integer,
    isUndefined,
    log,
    Monzo,
    Power,
    Prime,
    PRIMES,
    stringify,
} from "../../../../general"
import { Antivotes, ParameterValue, Submetric } from "../types"
import { secondaryParameterOverride } from "./secondaryParameter"

// (sum or count)
// of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (
    twoThreeFreeNumberMonzo: Monzo,
    submetric: Submetric = {},
    fractionalPartType?: FractionalPartType,
): Antivotes => {
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

    return twoThreeFreeNumberMonzo.reduce(
        (monzoAntivotes: Antivotes, primeExponent: Integer & Exponent<Prime>, index: number): Antivotes => {
            if (max && index < indexOfFinalElement(twoThreeFreeNumberMonzo)) {
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
            adjustedPrime = adjustedPrime + secondaryParameterOverride(x, u, primeExponent, fractionalPartType)
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
            adjustedPrime = adjustedPrime + secondaryParameterOverride(w, b, primeExponent, fractionalPartType)

            if (primeExponent === 0) {
                adjustedPrimeExponent = 0
            } else {
                adjustedPrimeExponent = withoutRepetition ? 1 : abs(primeExponent)
                // adjustedPrimeExponent = adjustedPrimeExponent + t
                adjustedPrimeExponent = adjustedPrimeExponent >= 0 ?
                    adjustedPrimeExponent ** secondaryParameterOverride(y, v, primeExponent, fractionalPartType) :
                    0
                // adjustedPrimeExponent = adjustedPrimeExponent + s
            }

            let primeExponentAntivotes = adjustedPrime * adjustedPrimeExponent
            if (index === 2 && modifiedCount) {
                primeExponentAntivotes = primeExponentAntivotes * 0.5
            }

            if (isNaN(primeExponentAntivotes)) {
                throw new Error(`You got NaN! in submetricAntivotes ${twoThreeFreeNumberMonzo} ${stringify(submetric, { multiline: true })}`)
            }

            return monzoAntivotes + primeExponentAntivotes as Antivotes
        },
        0 as Antivotes,
    )
}

export {
    computeSubmetricAntivotes,
}
