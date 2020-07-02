const {PRIMES} = require("../../utilities/constants")
const {computeTermRange} = require("./termRange")
const {computeSopfr} = require("../../utilities/comma/sopfr")
const {computeCopfr} = require("../../utilities/comma/copfr")
const {computeTrimmedMonzo} = require("../../utilities/comma/trimmedMonzo")

const computeFiveSlicedMonzosToCheck = ({maximumPrimeLimit, maximumFiveRoughSopfr, maximumFiveRoughCopfr} = {}) => {
    if (typeof maximumFiveRoughSopfr === "undefined") {
        if (typeof maximumPrimeLimit === "undefined") {
            if (typeof maximumFiveRoughCopfr === "undefined") {
                throw new Error("The primes must be limited somehow.")
            } else {
                throw new Error("The size of the primes must be limited somehow.")
            }
        } else if (typeof maximumFiveRoughCopfr === "undefined") {
            throw new Error("The count of the primes must be limited somehow.")
        }
    }

    let fiveSlicedMonzosToCheck = [
        [],
    ]

    let maximumPrime
    if (maximumPrimeLimit) {
        maximumPrime = maximumPrimeLimit
    } else {
        const possiblePrimes = PRIMES.filter(prime => prime < maximumFiveRoughSopfr)
        maximumPrime = possiblePrimes[possiblePrimes.length - 1]
    }
    const indexOfMaximumPrime = PRIMES.findIndex(prime => {
        return prime === maximumPrime
    })

    const primes = PRIMES.slice(2, indexOfMaximumPrime + 1)

    primes.forEach(prime => {
        const extendedFiveSlicedMonzosToCheck = []

        fiveSlicedMonzosToCheck.forEach(fiveSlicedMonzoToCheck => {
            const fiveRoughSopfr = computeSopfr([0, 0, ...fiveSlicedMonzoToCheck])
            const fiveRoughCopfr = computeCopfr([0, 0, ...fiveSlicedMonzoToCheck])

            const termRange = computeTermRange(
                prime,
                {
                    maximumFiveRoughSopfr: maximumFiveRoughSopfr ? maximumFiveRoughSopfr - fiveRoughSopfr : undefined,
                    maximumFiveRoughCopfr: maximumFiveRoughCopfr ? maximumFiveRoughCopfr - fiveRoughCopfr : undefined,
                },
            )
            termRange.forEach(potentialNextTerm => {
                extendedFiveSlicedMonzosToCheck.push(fiveSlicedMonzoToCheck.concat(potentialNextTerm))
            })
        })

        fiveSlicedMonzosToCheck = extendedFiveSlicedMonzosToCheck
    })

    return fiveSlicedMonzosToCheck.map(computeTrimmedMonzo)
}

module.exports = {
    computeFiveSlicedMonzosToCheck,
}
