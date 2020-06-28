const {PRIMES} = require("../constants")
const {computeReducedMonzo} = require("./reducedMonzo")

const computeLimit = monzo => {
    const reducedMonzo = computeReducedMonzo(monzo)

    if (!reducedMonzo.length) return 1

    return PRIMES[reducedMonzo.length - 1]
}

module.exports = {
    computeLimit,
}
