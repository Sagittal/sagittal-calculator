const {program} = require("commander")
const {computeFiveMonzosToCheck} = require("./findCommas/fiveMonzosToCheck")
const {computeCommasFromFiveMonzo} = require("./findCommas/commasFromFiveMonzo")
const {presentCommas} = require("../utilities/comma/present/commas")
const {invertMonzo} = require("../utilities/comma/invertMonzo")
const {MAXIMUM_POSITION} = require("../notations/ji/intervals")

program
    .option("-l, --lower-bound <lowerBound>", "output extra debugging", parseFloat)
    .option("-u, --upper-bound <upperBound>", "small pizza size", parseFloat)
    .option("-p, --prime-limit <primeLimit>", "maximum prime limit", parseInt)
    .option("-a, --apotome-slope <apotomeSlope>", "maximum absolute apotome slope", parseFloat)
    .option("-+, --sopfgtt <sopfgtt>", "maximum sopfgtt", parseInt)
    .option("-#, --copfgtt <copfgtt>", "maximum copfgtt", parseInt)
    .option("-3, --absolute-three-exponent <absoluteThreeExponent>", "maximum absolute 3 exponent", parseInt)
    .option("-f, --five-rough-monzo <fiveRoughMonzo>", "five-rough monzo", JSON.parse)
    .option("-s, --sort <sort>", "sort by")
    .parse(process.argv)

const lowerBound = program.lowerBound || 0
const upperBound = program.upperBound || MAXIMUM_POSITION
const maximumSopfgtt = program.sopfgtt || 61
const maximumCopfgtt = program.copfgtt || 555 // a silly number, unlikely to come close
const maximumApotomeSlope = program.apotomeSlope || 14
const maximumPrimeLimit = program.primeLimit || 47
const maximumAbsoluteThreeExponent = program.absoluteThreeExponent || 15
const fiveRoughMonzo = program.fiveRoughMonzo
const sort = program.sort

let commas = []

const fiveMonzosToCheck = fiveRoughMonzo ? [fiveRoughMonzo, invertMonzo(fiveRoughMonzo)] : computeFiveMonzosToCheck({
    maximumPrimeLimit,
    maximumSopfgtt,
    maximumCopfgtt,
})

fiveMonzosToCheck.forEach(fiveMonzoToCheck => {
    commas = commas.concat(
        computeCommasFromFiveMonzo(
            fiveMonzoToCheck,
            {
                lowerBound,
                upperBound,
                maximumApotomeSlope,
                maximumAbsoluteThreeExponent,
            },
        ),
    )
})

if (sort) {
    commas.sort((a, b) => {
        return a[sort] - b[sort]
    })
}

console.log(presentCommas(commas))
