import { PRIMES } from "../../../../utilities/constants"
import { computePrimeCount } from "../../../../utilities/primeCount"
import { computeLog } from "../../../../utilities/log"
import { SUBMETRIC_PROPERTIES } from "../../constants"
import { Monzo } from "../../../../utilities/comma/types"
import { DynamicParameterValue, Submetric, SubmetricOperation, SubmetricType } from "../../types"
import { Antivotes } from "../types"

// (sum or resolution)
// of (maybe adjusted) prime factors
// (or prime factor indices via prime resolution function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (fiveRoughNumberMonzo: Monzo, submetric = {}): Antivotes => {
    const {
        a = 1 as DynamicParameterValue,
        aIsExponent = false,
        aIsBase = false,
        w = 0 as DynamicParameterValue,
        // x = 0 as DynamicParameterValue,
        y = 1 as DynamicParameterValue,
        // v = 0 as DynamicParameterValue,
        // t = 0 as DynamicParameterValue,
        submetricType = SubmetricType.SOAPFAR,
        modifiedCount = false,
    }: Submetric = submetric

    const {
        withRepetition = true,
        operation = SubmetricOperation.SUM,
        usePrimeIndex,
    } = SUBMETRIC_PROPERTIES[ submetricType ]

    return fiveRoughNumberMonzo.reduce(
        (monzoAntivotes: Antivotes, primeExponent, index): Antivotes => {
            if (operation === SubmetricOperation.MAX && index < fiveRoughNumberMonzo.length - 1) return 0 as Antivotes

            const prime = PRIMES[ index ]

            let adjustedPrime
            let adjustedPrimeExponent

            adjustedPrime = operation === SubmetricOperation.COUNT ?
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
                adjustedPrimeExponent = withRepetition ? Math.abs(primeExponent) : 1
                // adjustedPrimeExponent = adjustedPrimeExponent + t
                adjustedPrimeExponent = adjustedPrimeExponent >= 0 ? adjustedPrimeExponent ** y : 0
                // adjustedPrimeExponent = adjustedPrimeExponent + v
            }

            let primeExponentAntivotes = adjustedPrimeExponent * adjustedPrime
            if (index === 2 && modifiedCount) {
                primeExponentAntivotes = primeExponentAntivotes * 0.5
            }

            if (isNaN(primeExponentAntivotes)) throw new Error(`You got NaN! in submetricAntivotes ${fiveRoughNumberMonzo} ${JSON.stringify(submetric, null, 4)}`)

            return monzoAntivotes + primeExponentAntivotes as Antivotes
        },
        0 as Antivotes,
    )
}

export {
    computeSubmetricAntivotes,
}
