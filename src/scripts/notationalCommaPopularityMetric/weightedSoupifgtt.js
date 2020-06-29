const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")
const {computePrimeCount} = require("../../utilities/primeCount")

// sum of unique prime factors > 3, mapped to prime count fn (π)
const computeWeightedSoupifgtt = (monzo, a = 1, l = false, y = 1, m = false) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (soupifgtt, term, index) => {
            if (index < 2) return 0

            const primeCount = computePrimeCount(PRIMES[index])
            const weightedPrimeCount = l ? Math.log(primeCount) / Math.log(a) : primeCount ** a

            const weightedTerm = m ? Math.log(term) / Math.log(y) : term ** y

            const upifgtt = weightedTerm === 0 ? 0 : weightedPrimeCount

            return soupifgtt + upifgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSoupifgtt,
}
