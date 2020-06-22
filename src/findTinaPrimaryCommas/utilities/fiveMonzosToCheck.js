const {PRIMES} = require("../constants")
const {computeTermRange} = require("./termRange")
const {computeSopfgtt} = require("./sopfgtt")
const {computeCopfgtt} = require("./copfgtt")
const {computeReducedMonzo} = require("./reducedMonzo")

const computeFiveMonzosToCheck = ({maximumPrimeLimit, maximumSopfgtt, maximumCopfgtt} = {}) => {
    if (typeof maximumSopfgtt === "undefined") {
        if (typeof maximumPrimeLimit === "undefined") {
            if (typeof maximumCopfgtt === "undefined") {
                throw new Error("The primes must be limited somehow.")
            } else {
                throw new Error("The size of the primes must be limited somehow.")
            }
        } else if (typeof maximumCopfgtt === "undefined") {
            throw new Error("The count of the primes must be limited somehow.")
        }
    }

    let fiveMonzosToCheck = [
        [],
    ]

    let maximumPrime
    if (maximumPrimeLimit) {
        maximumPrime = maximumPrimeLimit
    } else {
        const possiblePrimes = PRIMES.filter(prime => prime < maximumSopfgtt)
        maximumPrime = possiblePrimes[possiblePrimes.length - 1]
    }
    const indexOfMaximumPrime = PRIMES.findIndex(prime => {
        // if (prime < 100) console.log('wtsf', prime, maximumP?rime, prime === maximumPrime)
        return prime === maximumPrime
    })

    const primes = PRIMES.slice(2, indexOfMaximumPrime + 1)
    // console.log('result primes', primes, maximumPrimeLimit, maximumPrime, indexOfMaximumPrime)

    primes.forEach(prime => {
        const newFiveMonzosToCheck = []

        fiveMonzosToCheck.forEach(fiveMonzoToCheck => {
            const sopfgtt = computeSopfgtt([0, 0, ...fiveMonzoToCheck])
            const copfgtt = computeCopfgtt([0, 0, ...fiveMonzoToCheck])

            const termRange = computeTermRange(
                prime,
                {
                    maximumSopfgtt: maximumSopfgtt ? maximumSopfgtt - sopfgtt : undefined,
                    maximumCopfgtt: maximumCopfgtt ? maximumCopfgtt - copfgtt : undefined, // TODO: test this
                },
            )
            termRange.forEach(potentialNextTerm => {
                newFiveMonzosToCheck.push(fiveMonzoToCheck.concat(potentialNextTerm))
            })
        })

        fiveMonzosToCheck = newFiveMonzosToCheck
    })

    return fiveMonzosToCheck.map(computeReducedMonzo)
}

module.exports = {
    computeFiveMonzosToCheck,
}
