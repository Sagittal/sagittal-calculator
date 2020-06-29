const {PRIMES} = require("../../utilities/constants")
const {primeFactorizeInteger} = require("../../utilities/comma/monzoFromRatio")


// sum of prime factors > 3
const computeWeightedSopfgtt = (monzo, a = 1, l = false, y = 1, m = false) => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            const prime = PRIMES[index]
            const weightedPrime = l ? Math.log(prime) / Math.log(a) : prime ** a

            const weightedTerm = m ? Math.log(term) / Math.log(y) : term ** y

            const pfgtt = Math.abs(weightedTerm * weightedPrime)

            return sopfgtt + pfgtt
        },
        0,
    )
}

module.exports = {
    computeWeightedSopfgtt,
}
