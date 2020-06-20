const {PRIMES} = require("../constants")

const computeLimit = monzo => {
    while(monzo[monzo.length - 1] === 0){
        monzo.pop()
    }

    return PRIMES[monzo.length - 1]
}

module.exports = {
    computeLimit,
}
