const {computeFiveMonzosToCheck} = require("./utilities/fiveMonzosToCheck")
const {computeCommasFromFiveMonzo} = require("./utilities/commasFromFiveMonzo")

const args = process.argv.slice(2)

const lowerBound = args[0]
const upperBound = args[1]

const MAXIMUM_SUM_OF_PRIMES_GREATER_THAN_THREE = 61
const MAXIMUM_COUNT_OF_PRIMES_GREATER_THAN_THREE = 5
const MAXIMUM_APOTOME_SLOPE = 15 // TODO: where did this number come from? my post? http://forum.sagittal.org/viewtopic.php?p=1661#p1661
const MAXIMUM_PRIME_LIMIT = 47

let commas = []

const fiveMonzosToCheck = computeFiveMonzosToCheck({
    maximumPrimeLimit: MAXIMUM_PRIME_LIMIT,
    maximumSopfgtt: MAXIMUM_SUM_OF_PRIMES_GREATER_THAN_THREE,
    // maximumCopfgtt: MAXIMUM_COUNT_OF_PRIMES_GREATER_THAN_THREE,
})

fiveMonzosToCheck.forEach(fiveMonzoToCheck => {
    commas = commas.concat(computeCommasFromFiveMonzo(fiveMonzoToCheck, {lowerBound, upperBound}))
})

commas.sort(({sopfgtt}, {sopfgtt: nextSopfgtt}) => sopfgtt - nextSopfgtt)

commas.forEach(({ formattedOutput }) => console.log(formattedOutput))
