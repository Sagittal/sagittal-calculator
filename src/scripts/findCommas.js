const {program} = require("commander")
const {computeFiveMonzosToCheck} = require("./findCommas/fiveMonzosToCheck")
const {computeCommasFromFiveMonzo} = require("./findCommas/commasFromFiveMonzo")
const {presentComma} = require("../utilities/comma/present/comma")
const {invertMonzo} = require("../utilities/comma/invertMonzo")
const {MAXIMUM_POSITION} = require("../notations/ji/intervals")
const {FIND_COMMAS_HEADER_ROW} = require("../utilities/comma/present/headerRow")

program
    .option("-l, --lower-bound <lowerBound>", "output extra debugging", parseFloat)
    .option("-u, --upper-bound <upperBound>", "small pizza size", parseFloat)
    .option("-p, --prime-limit <primeLimit>", "maximum prime limit", parseInt)
    .option("-a, --apotome-slope <apotomeSlope>", "maximum absolute apotome slope", parseFloat)
    .option("-s, --sopfgtt <sopfgtt>", "maximum sopfgtt", parseInt)
    .option("-c, --copfgtt <copfgtt>", "maximum copfgtt", parseInt)
    .option("-3, --absolute-three-exponent <absoluteThreeExponent>", "maximum absolute 3 exponent", parseInt)
    .option("-f, --five-rough-monzo <fiveRoughMonzo>", "five-rough monzo", JSON.parse)
    .parse(process.argv)

const lowerBound = program.lowerBound || 0
const upperBound = program.upperBound || MAXIMUM_POSITION
const maximumSopfgtt = program.sopfgtt || 61
const maximumCopfgtt = program.copfgtt || 555 // a silly number, unlikely to come close
const maximumApotomeSlope = program.apotomeSlope || 14
const maximumPrimeLimit = program.primeLimit || 47
const maximumAbsoluteThreeExponent = program.absoluteThreeExponent || 15
const fiveRoughMonzo = program.fiveRoughMonzo

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

commas.sort(({sopfgtt}, {sopfgtt: nextSopfgtt}) => sopfgtt - nextSopfgtt)

console.log(FIND_COMMAS_HEADER_ROW)
commas.forEach(comma => console.log(presentComma(comma)))
