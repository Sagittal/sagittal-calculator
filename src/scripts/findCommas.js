const {program} = require("commander")
const {presentCommas} = require("../utilities/comma/present/commas")
const {parseMonzo} = require("../utilities/comma/monzo")
const {computeCommas} = require("./findCommas/commas")
const {MAXIMUM_POSITION} = require("../notations/ji/intervals")

program
    .option("-l, --lower-bound <lowerBound>", "lower bound", parseFloat)
    .option("-u, --upper-bound <upperBound>", "upper bound", parseFloat)
    .option("-p, --prime-limit <primeLimit>", "maximum prime limit", parseInt)
    .option("-a, --apotome-slope <apotomeSlope>", "maximum absolute apotome slope", parseFloat)
    .option("-+, --five-rough-sopfr <fiveRoughSopfr>", "maximum 5-rough sopfr", parseInt)
    .option("-#, --five-rough-copfr <fiveRoughCopfr>", "maximum 5-rough copfr", parseInt)
    .option("-3, --absolute-three-exponent <absoluteThreeExponent>", "maximum absolute 3 exponent", parseInt)
    .option("-f, --five-sliced-monzo <fiveSlicedMonzo>", "5-sliced monzo", parseMonzo)
    .option("-s, --sort-by <sortBy>", "sort by")
    .parse(process.argv)

const lowerBound = program.lowerBound || 0
const upperBound = program.upperBound || MAXIMUM_POSITION
const maximumFiveRoughSopfr = program.fiveRoughSopfr || 61
const maximumFiveRoughCopfr = program.fiveRoughCopfr || 555 // a silly number, unlikely to come close
const maximumApotomeSlope = program.apotomeSlope || 14
const maximumPrimeLimit = program.primeLimit || 47
const maximumAbsoluteThreeExponent = program.absoluteThreeExponent || 15
const fiveSlicedMonzo = program.fiveSlicedMonzo
const sortKey = program.sortBy

const commas = computeCommas({
    lowerBound,
    upperBound,
    maximumFiveRoughSopfr,
    maximumFiveRoughCopfr,
    maximumApotomeSlope,
    maximumPrimeLimit,
    maximumAbsoluteThreeExponent,
    fiveSlicedMonzo,
    sortKey,
})
console.log(presentCommas(commas))
