import { program } from "commander"
import { parseMonzo } from "../../../general"
import { MAX_POSITION } from "../../../notations"
import { computeCommas } from "../commas"
import { formatCommas } from "../io"

program
    .option("-l, --min-cents <minCents>", "min cents", parseFloat)
    .option("-u, --max-cents <maxCents>", "max cents", parseFloat)
    .option("-p, --prime-limit <primeLimit>", "max prime limit", parseInt)
    .option("-a, --apotome-slope <apotomeSlope>", "max absolute apotome slope", parseFloat)
    .option("-+, --five-rough-sopfr <fiveRoughSopfr>", "max 5-rough sopfr", parseInt)
    .option("-#, --five-rough-copfr <fiveRoughCopfr>", "max 5-rough copfr", parseInt)
    .option("-3, --absolute-three-exponent <absoluteThreeExponent>", "max absolute 3 exponent", parseInt)
    .option("-n, --n2d3p9 <n2d3p9>", "max n2d3p9", parseFloat)
    .option("-f, --five-sliced-monzo <fiveSlicedMonzo>", "5-sliced monzo", parseMonzo)
    .option("-s, --sort-by <sortBy>", "sort by")
    .parse(process.argv)

const minCents = program.minCents || 0
const maxCents = program.maxCents || MAX_POSITION
const maxFiveRoughSopfr = program.fiveRoughSopfr || 61
const maxFiveRoughCopfr = program.fiveRoughCopfr || 555 // A silly number, unlikely to come close
const maxApotomeSlope = program.apotomeSlope || 14
const maxPrimeLimit = program.primeLimit || 47
const maxAbsoluteThreeExponent = program.absoluteThreeExponent || 15
const maxN2D3P9 = program.maxN2d3p9 || 307
const fiveSlicedMonzo = program.fiveSlicedMonzo
const sortKey = program.sortBy

const commas = computeCommas({
    minCents,
    maxCents,
    maxFiveRoughSopfr,
    maxFiveRoughCopfr,
    maxApotomeSlope,
    maxPrimeLimit,
    maxAbsoluteThreeExponent,
    maxN2D3P9,
    fiveSlicedMonzo,
    sortKey,
})
console.log(formatCommas(commas))
