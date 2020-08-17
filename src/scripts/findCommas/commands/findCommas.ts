import { program } from "commander"
import { parseMonzo } from "../../../general"
import { MAXIMUM_POSITION } from "../../../notations"
import { computeCommas } from "../commas"
import { presentCommas } from "../present"

program
    .option("-l, --lower-bound <lowerBound>", "lower bound", parseFloat)
    .option("-u, --upper-bound <upperBound>", "upper bound", parseFloat)
    .option("-p, --prime-limit <primeLimit>", "maximum prime limit", parseInt)
    .option("-a, --apotome-slope <apotomeSlope>", "maximum absolute apotome slope", parseFloat)
    .option("-+, --five-rough-sopfr <fiveRoughSopfr>", "maximum 5-rough sopfr", parseInt)
    .option("-#, --five-rough-copfr <fiveRoughCopfr>", "maximum 5-rough copfr", parseInt)
    .option("-3, --absolute-three-exponent <absoluteThreeExponent>", "maximum absolute 3 exponent", parseInt)
    .option("-n, --n2d3p9 <n2d3p9>", "maximum n2d3p9", parseFloat)
    .option("-f, --five-sliced-monzo <fiveSlicedMonzo>", "5-sliced monzo", parseMonzo)
    .option("-s, --sort-by <sortBy>", "sort by")
    .parse(process.argv)

const lowerBound = program.lowerBound || 0
const upperBound = program.upperBound || MAXIMUM_POSITION
const maximumFiveRoughSopfr = program.fiveRoughSopfr || 61  // todo I'm not seeing where this actually filters out sopfr greater than it. maybe try to produce a failing example.
const maximumFiveRoughCopfr = program.fiveRoughCopfr || 555 // A silly number, unlikely to come close
const maximumApotomeSlope = program.apotomeSlope || 14
const maximumPrimeLimit = program.primeLimit || 47
const maximumAbsoluteThreeExponent = program.absoluteThreeExponent || 15
const maximumN2D3P9 = program.maximumN2d3p9 || 307 // todo currently in computeFiveSlicedMonzosToCheck if you don't provide sopfr you must provide both max copfr and prime limit. but a maximum N2D3P9 would also suffice. basically it's the same behavior as max sopfr. you could have either or both.
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
    maximumN2D3P9,
    fiveSlicedMonzo,
    sortKey,
})
console.log(presentCommas(commas))
