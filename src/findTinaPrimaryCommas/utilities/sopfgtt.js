const {PRIMES} = require("../constants")

// sum of prime factors > 3
const computeSopfgtt = monzo => {
    return monzo.reduce(
        (sopfgtt, term, index) => {
            if (index < 2) return 0

            return sopfgtt + Math.abs(term * PRIMES[index])
        },
        0,
    )
}

module.exports = {
    computeSopfgtt,
}
