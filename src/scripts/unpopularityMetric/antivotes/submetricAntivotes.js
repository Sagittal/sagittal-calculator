const {PRIMES} = require("../../../utilities/constants")
const {computePrimeCount} = require("../../../utilities/primeCount")
const {computeLog} = require("../../../utilities/log")
const {SUBMETRIC_OPERATION, SUBMETRIC_TYPE, SUBMETRIC_PROPERTIES} = require("../constants")

// (sum or count)
// of (maybe adjusted) prime factors
// (or prime factor indices via prime count function π)
// (maybe with (maybe adjusted) repetition)

const computeSubmetricAntivotes = (fiveRoughNumberMonzo, submetric = {}) => {
    const {
        a = 1,
        aIsBaseNotPower = 0,
        w = 0,
        x = 0,
        y = 1,
        v = 0,
        t = 0,
        submetricType = SUBMETRIC_TYPE.SOAPFAR,
    } = submetric

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
            adjustedPrime = aIsBaseNotPower ?
                adjustedPrime >= 1 ?
                    computeLog(adjustedPrime, a) :
                    1 :
                adjustedPrime >= 0 ?
                    adjustedPrime ** a :
                    0
            adjustedPrime = adjustedPrime + w

            if (term === 0) {
                adjustedTerm = 0
            } else {
                adjustedTerm = withRepetition ? Math.abs(term) : 1
                adjustedTerm = adjustedTerm + t
                adjustedTerm = adjustedTerm >= 0 ? adjustedTerm ** y : 0
                adjustedTerm = adjustedTerm + v
            }


            const termUnpopularity = adjustedTerm * adjustedPrime

            // console.log("p", prime, "ap", adjustedPrime, "r", term, "ar", adjustedTerm, "monzoUnpopularity", monzoUnpopularity)

            return monzoUnpopularity + termUnpopularity
        },
        0,
    )
}

module.exports = {
    computeSubmetricAntivotes,
}
