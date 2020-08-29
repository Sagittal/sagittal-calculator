import { program } from "commander"
import {
    CommandFlag,
    Filename,
    Formatted,
    LogTarget,
    Monzo,
    parseCommands,
    parseMonzo,
    saveLog,
} from "../../../general"
import { MAX_SINGLE_SHAFT_CENTS } from "../../../sagittal"
import { computeCommas } from "../commas"
import { computeFindCommasTable } from "../io"

program
    .option(
        `-${CommandFlag.MIN_CENTS}, --min-cents <minCents>`,
        "min cents",
        parseFloat,
    )
    .option(
        `-${CommandFlag.MAX_CENTS}, --max-cents <maxCents>`,
        "max cents",
        parseFloat,
    )
    .option(
        `-${CommandFlag.PRIME_LIMIT}, --max-prime-limit <maxPrimeLimit>`,
        "max prime limit",
        parseInt,
    )
    .option(
        `-${CommandFlag.APOTOME_SLOPE}, --max-apotome-slope <maxApotomeSlope>`,
        "max absolute apotome slope",
        parseFloat,
    )
    .option(
        `-${CommandFlag.FIVE_ROUGH_SOPFR}, --max-five-rough-sopfr <maxFiveRoughSopfr>`,
        "max 5-rough sopfr",
        parseInt,
    )
    .option(
        `-${CommandFlag.FIVE_ROUGH_COPFR}, --max-five-rough-copfr <maxFiveRoughCopfr>`,
        "max 5-rough copfr",
        parseInt,
    )
    .option(
        `-${CommandFlag.ABSOLUTE_THREE}, --max-absolute-three-exponent <maxAbsoluteThreeExponent>`,
        "max absolute 3 exponent",
        parseInt,
    )
    .option(
        `-${CommandFlag.N2D3P9}, --max-n2d3p9 <maxN2d3p9>`,
        "max n2d3p9",
        parseFloat,
    )
    .option(
        `-${CommandFlag.FIVE_SLICED}, --five-sliced-monzo <fiveSlicedMonzo>`,
        "5-sliced monzo",
        (monzoText: string) => parseMonzo(monzoText as Formatted<Monzo>),
    )
    .option(
        `-${CommandFlag.SORT_BY}, --sort-by <sortBy>`,
        "sort by",
    )

parseCommands("findCommas" as Filename)

const minCents = program.minCents || 0
const maxCents = program.maxCents || MAX_SINGLE_SHAFT_CENTS
const maxFiveRoughSopfr = program.maxFiveRoughSopfr || 61
const maxFiveRoughCopfr = program.maxFiveRoughCopfr || 555 // A silly number, unlikely to come close
const maxApotomeSlope = program.maxApotomeSlope || 14
const maxPrimeLimit = program.maxPrimeLimit || 47
const maxAbsoluteThreeExponent = program.maxAbsoluteThreeExponent || 15
const maxN2D3P9 = program.maxN2d3p9 || 307
const fiveSlicedMonzo = program.fiveSlicedMonzo
const sortKey = program.sortBy

// TODO: this should actually take for-forum as a CLI option...
//  but should it take that generically in parseCommands?
//  at which point perhaps its not just logSettings, but ioSettings? and needs to live in an according place

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

saveLog(computeFindCommasTable(commas), LogTarget.ALL, "findCommas" as Filename)
