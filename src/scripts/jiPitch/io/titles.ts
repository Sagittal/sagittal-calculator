import { formatDecimal, formatIntegerDecimal, formatPitch, Io, NEWLINE } from "../../../general"
import { FindCommasSettings } from "../findCommas"

const JI_PITCH_TITLE = "   --- JI pitch ---\n\n" as Io

const TWO_THREE_FREE_CLASS_TITLE = "   --- 2,3-free class ---\n\n" as Io

const NOTATING_COMMAS_TITLE = "   --- notating commas ---\n\n" as Io

const computeFindCommasTitle = (findCommasSettings: FindCommasSettings): Io => {
    const {
        max23FreeSopfr,
        max23FreeCopfr,
        maxPrimeLimit,
        maxN2D3P9,
        lowerBound,
        upperBound,
        maxAte,
        maxAas,
    } = findCommasSettings

    return [
        "",
        `lower bound:       \t${formatPitch(lowerBound, { align: true })}`,
        `upper bound:       \t${formatPitch(upperBound, { align: true })}`,
        `max ATE:           \t${formatIntegerDecimal(maxAte, { align: true })}`,
        `max AAS:           \t${formatDecimal(maxAas, { align: true })}`,
        `max N2D3P9:        \t${formatDecimal(maxN2D3P9, { align: true })}`,
        `max 2,3-free sopfr:\t${formatIntegerDecimal(max23FreeSopfr, { align: true })}`,
        `max 2,3-free copfr:\t${formatIntegerDecimal(max23FreeCopfr, { align: true })}`,
        `max prime limit:   \t${formatIntegerDecimal(maxPrimeLimit, { align: true })}`,
        "",
    ].join(NEWLINE) + NEWLINE as Io
}

export {
    JI_PITCH_TITLE,
    TWO_THREE_FREE_CLASS_TITLE,
    NOTATING_COMMAS_TITLE,
    computeFindCommasTitle,
}
