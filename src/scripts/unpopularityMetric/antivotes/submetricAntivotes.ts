import {PRIMES} from "../../../utilities/constants"
import {computePrimeCount} from "../../../utilities/primeCount"
import {computeLog} from "../../../utilities/log"
import {SUBMETRIC_OPERATION, SUBMETRIC_TYPE, SUBMETRIC_PROPERTIES} from "../constants"

// (sum or count)
// of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (fiveRoughNumberMonzo, submetric = {}) => {
    const {
        a = 1,
        aIsExponent = false,
        aIsBase = false,
        w = 0,
        x = 0,
        y = 1,
        v = 0,
        t = 0,
        submetricType = SUBMETRIC_TYPE.SOAPFAR,
        modifiedCount = false,
    }: any = submetric

    const {
        withRepetition = true,
        operation = SUBMETRIC_OPERATION.SUM,
        usePrimeIndex,
    } = SUBMETRIC_PROPERTIES[submetricType]

    return fiveRoughNumberMonzo.reduce(
        (monzoUnpopularity, term, index) => {
            if (operation === SUBMETRIC_OPERATION.MAX && index < fiveRoughNumberMonzo.length - 1) return 0

            const prime = PRIMES[index]

            let adjustedPrime
            let adjustedTerm

            adjustedPrime = operation === SUBMETRIC_OPERATION.COUNT ?
                1 :
                usePrimeIndex ?
                    computePrimeCount(prime) :
                    prime
            adjustedPrime = adjustedPrime + x
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
                adjustedTerm = adjustedTerm + t
                adjustedTerm = adjustedTerm >= 0 ? adjustedTerm ** y : 0
                adjustedTerm = adjustedTerm + v
            }

            let termUnpopularity = adjustedTerm * adjustedPrime
            if (index === 2 && modifiedCount) {
                termUnpopularity = termUnpopularity * 0.5
            }

            if (isNaN(termUnpopularity)) throw new Error(`You got NaN! in submetricAntivotes ${fiveRoughNumberMonzo} ${JSON.stringify(submetric, null, 4)}`)

            return monzoUnpopularity + termUnpopularity
        },
        0,
    )
}

export {
    computeSubmetricAntivotes,
}
