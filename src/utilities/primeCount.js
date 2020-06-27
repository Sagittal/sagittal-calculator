const {PRIMES} = require("./constants")

const computePrimeCount = value => {
    return PRIMES.findIndex(prime => prime > value)
}

module.exports = {
    computePrimeCount,
}
