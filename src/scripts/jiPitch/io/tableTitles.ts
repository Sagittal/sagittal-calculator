import {
    BLANK,
    computeLowerAndUpperExclusive,
    formatBound,
    formatDecimal,
    formatIntegerDecimal,
    Io,
    NEWLINE,
} from "@sagittal/general"
import {FindCommasOptions} from "../findCommas"

const JI_PITCH_TABLE_TITLE = "   --- JI pitch ---\n\n" as Io

const TWO_3_FREE_CLASS_TABLE_TITLE = "   --- 2,3-free class ---\n\n" as Io

const NOTATING_COMMAS_TABLE_TITLE = "   --- notating commas ---\n\n" as Io

const computeFindCommasTableTitle = (findCommasOptions: FindCommasOptions): Io => {
    const {
        max23FreeSopfr,
        max23FreeCopfr,
        maxPrimeLimit,
        maxN2D3P9,
        zone: {extrema: [lowerBound, upperBound], exclusive},
        maxAte,
        maxAas,
    } = findCommasOptions

    const {lowerExclusive, upperExclusive} = computeLowerAndUpperExclusive(exclusive)

    return [
        BLANK,
        `lower bound:       \t${formatBound(lowerBound, lowerExclusive)}`,
        `upper bound:       \t${formatBound(upperBound, upperExclusive)}`,
        `max ATE:           \t${formatIntegerDecimal(maxAte, {align: true})}`,
        `max AAS:           \t${formatDecimal(maxAas, {align: true})}`,
        `max N2D3P9:        \t${formatDecimal(maxN2D3P9, {align: true})}`,
        `max 2,3-free sopfr:\t${formatIntegerDecimal(max23FreeSopfr, {align: true})}`,
        `max 2,3-free copfr:\t${formatIntegerDecimal(max23FreeCopfr, {align: true})}`,
        `max prime limit:   \t${formatIntegerDecimal(maxPrimeLimit, {align: true})}`,
        BLANK,
    ].join(NEWLINE) + NEWLINE as Io
}

export {
    JI_PITCH_TABLE_TITLE,
    TWO_3_FREE_CLASS_TABLE_TITLE,
    NOTATING_COMMAS_TABLE_TITLE,
    computeFindCommasTableTitle,
}
