const {PRIMES} = require("../constants")
const {computeTrimmedMonzo} = require("./trimmedMonzo")

const computeGpf = monzo => {
    const trimmedMonzo = computeTrimmedMonzo(monzo)

    if (!trimmedMonzo.length) return 1

    return PRIMES[trimmedMonzo.length - 1]
}

module.exports = {
    computeGpf,
}
