import { PRIMES } from "../../../../utilities/constants"
import { computePrimeCount } from "../../../../utilities/primeCount"
import { computeLog } from "../../../../utilities/log"
import { SUBMETRIC_PROPERTIES } from "../../constants"
import { Monzo } from "../../../../utilities/comma/types"
import { Submetric, SubmetricOperation, SubmetricType } from "../../types"
import { Antivotes } from "../../sumOfSquares/types"
import { DynamicParameterValue } from "../../automator/samples/types"

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
    } = SUBMETRIC_PROPERTIES[ submetricType as SubmetricType]

    return fiveRoughNumberMonzo.reduce(
        (monzoAntivotes: Antivotes, term, index): Antivotes => {
            if (operation === SubmetricOperation.MAX && index < fiveRoughNumberMonzo.length - 1) return 0 as Antivotes

            const prime = PRIMES[ index ]

            let adjustedPrime
            let adjustedTerm

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

            if (term === 0) {
                adjustedTerm = 0
            } else {
                adjustedTerm = withRepetition ? Math.abs(term) : 1
                // adjustedTerm = adjustedTerm + t
                adjustedTerm = adjustedTerm >= 0 ? adjustedTerm ** y : 0
                // adjustedTerm = adjustedTerm + v
            }

            let termAntivotes = adjustedTerm * adjustedPrime
            if (index === 2 && modifiedCount) {
                termAntivotes = termAntivotes * 0.5
            }

            if (isNaN(termAntivotes)) throw new Error(`You got NaN! in submetricAntivotes ${fiveRoughNumberMonzo} ${JSON.stringify(submetric, null, 4)}`)

            return monzoAntivotes + termAntivotes as Antivotes
        },
        0 as Antivotes,
    )
}

export {
    computeSubmetricAntivotes,
}
