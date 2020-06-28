const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")


// sum of unique prime factors > 3
const computeWeightedSoupfgtt = (monzo, b, logarithmic) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (soupfgtt, term, index) => {
            if (index < 2) return 0

            const prime = PRIMES[index]
            const weightedPrime = logarithmic ? Math.log(prime) / Math.log(b) : prime ** b
            const upfgtt = term === 0 ? 0 : weightedPrime

            return soupfgtt + upfgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSoupfgtt,
}
