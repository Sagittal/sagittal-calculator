const {PRIMES} = require("../constants")
const {primeFactorizeInteger} = require("./monzoFromRatio")

// sum of unique prime factors > 3
const computeSoupfgtt = monzo => {
    if (typeof monzo === "number") {
        monzo = primeFactorizeInteger(monzo)
    }

    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            const prime = term === 0 ? 0 : PRIMES[index]

            return sopfgtt + prime
        },
        0,
    )
}

module.exports = {
    computeSoupfgtt,
}
