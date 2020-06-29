const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")


// sum of unique prime factors > 3
const computeWeightedSoupfgtt = (monzo, a = 1, l = false, y = 1, m = false) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (soupfgtt, term, index) => {
            if (index < 2) return 0

            const prime = PRIMES[index]
            const weightedPrime = l ? Math.log(prime) / Math.log(a) : prime ** a

            const weightedTerm = m ? Math.log(term) / Math.log(y) : term ** y // todo: does soup actually work correctly in logarithmic mode? test

            const upfgtt = weightedTerm === 0 ? 0 : weightedPrime

            return soupfgtt + upfgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSoupfgtt,
}
