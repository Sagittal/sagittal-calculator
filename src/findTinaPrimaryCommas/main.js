const {computeFiveMonzosToCheck} = require("./utilities/fiveMonzosToCheck")
const {computeCommasFromFiveMonzo} = require("./utilities/commasFromFiveMonzo")
const {presentComma} = require("./present/comma")

const args = process.argv.slice(2)

const lowerBound = args[0]
const upperBound = args[1]

// TODO: perhaps the rest of these should also be received as flags from the command line (but I think that may involve adding a new package)
const MAXIMUM_SUM_OF_PRIMES_GREATER_THAN_THREE = 61
const MAXIMUM_COUNT_OF_PRIMES_GREATER_THAN_THREE = 555 // a silly number, unlikely to come close
const MAXIMUM_APOTOME_SLOPE = 14
const MAXIMUM_PRIME_LIMIT = 47
const MAXIMUM_ABSOLUTE_THREE_EXPONENT = 15

let commas = []

const fiveMonzosToCheck = computeFiveMonzosToCheck({
    maximumPrimeLimit: MAXIMUM_PRIME_LIMIT,
    maximumSopfgtt: MAXIMUM_SUM_OF_PRIMES_GREATER_THAN_THREE,
    maximumCopfgtt: MAXIMUM_COUNT_OF_PRIMES_GREATER_THAN_THREE,
})

fiveMonzosToCheck.forEach(fiveMonzoToCheck => {
    commas = commas.concat(
        computeCommasFromFiveMonzo(
            fiveMonzoToCheck,
            {
                lowerBound,
                upperBound,
                maximumApotomeSlope: MAXIMUM_APOTOME_SLOPE,
                maximumAbsoluteThreeExponent: MAXIMUM_ABSOLUTE_THREE_EXPONENT,
            }
        )
    )
})

commas.sort(({sopfgtt}, {sopfgtt: nextSopfgtt}) => sopfgtt - nextSopfgtt)

commas.forEach(comma => console.log(presentComma(comma)))
