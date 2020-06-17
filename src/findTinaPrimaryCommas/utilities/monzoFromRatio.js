const {PRIMES} = require("../constants")
const {combineMonzos} = require("./combineMonzos")

// const primeFactorize = integerOrRational => {
//     if (typeof integerOrRational === "object") {
//         return primeFactorizeRational(integerOrRational)
//     }
//
//     return primeFactorizeInteger(integerOrRational)
// }

const computeMonzoFromRatio = ratio => {
    const positiveFactors = primeFactorizeInteger(ratio[0])
    const negativeFactors = primeFactorizeInteger(ratio[1]).map(term => -term)

    while (positiveFactors.length < negativeFactors.length) {
        positiveFactors.push(0)
    }

    // console.log(positiveFactors, negativeFactors)

    // TODO: can i just use combineMonzos?
    // return positiveFactors.map((positiveFactor, index) => {
    //     const negativeFactor = negativeFactors[index]
    //
    //     return positiveFactor - negativeFactor
    // })
    return combineMonzos(positiveFactors, negativeFactors)
}

const primeFactorizeInteger = integer => {
    if (integer === 0) {
        throw new Error("The prime factorization of zero is not defined.")
    }

    const monzo = []
    let remnant = integer

    const computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant = index => {
        const divisor = PRIMES[index]
        let remainder = remnant % divisor

        if (remainder === 0) {
            while (monzo.length <= index) {
                monzo.push(0)
            }

            while (remainder === 0) {
                remnant = Math.floor(remnant / divisor)
                monzo[index] += 1
                remainder = remnant % divisor
            }
        }
    }

    for (let index = 0; index <= PRIMES.length - 1; index += 1) {
        computePrimeFactorizationForPrimeAtIndexAndUpdateRemnant(index)

        if (remnant === 1) {
            break
        }
    }

    return monzo
}

module.exports = {
    computeMonzoFromRatio,
}
