const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of prime factors > 3, mapped to prime count fn (π)
const computeWeightedSopifgtt = (monzo, a = 1, l = false, y = 1, m = false) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopifgtt, term, index) => {
            if (index < 2) return 0

            const primeCount = computePrimeCount(PRIMES[index])
            const weightedPrimeCount = l ? Math.log(primeCount) / Math.log(a) : primeCount ** a

            const weightedTerm = m ? Math.log(term) / Math.log(y) : term ** y

            const pifgtt = Math.abs(weightedTerm * weightedPrimeCount)

            return sopifgtt + pifgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSopifgtt,
}
