import { program } from "commander"
import {
    Abs, ANY_MONZO_CHARS,
    Cents, Comma, computeMonzoFromInteger,
    Exponent, Formatted,
    IDENTIFYING_COMMA_NAME_CHARS,
    Integer,
    Io,
    JiPitch,
    Max,
    Min, Monzo, Name, parseInteger, parseMonzo, parseRatio,
    Prime, Ratio,
} from "../../../general"
import {
    ApotomeSlope,
    computeMonzoFrom23FreeClassAndSizeCategoryName,
    DEFAULT_FIND_COMMAS_OPTIONS,
    N2D3P9,
    parseCommaName,
} from "../../../sagittal"
import { FindCommasOptions } from "../types"

const parseFindCommasOptions = (
    defaultOverrides: Partial<FindCommasOptions> = {},
): FindCommasOptions => {
    const max23FreeSopfr = program.max23FreeSopfr ||
        defaultOverrides.max23FreeSopfr ||
        DEFAULT_FIND_COMMAS_OPTIONS.max23FreeSopfr
    const max23FreeCopfr = program.max23FreeCopfr ||
        defaultOverrides.max23FreeCopfr ||
        DEFAULT_FIND_COMMAS_OPTIONS.max23FreeCopfr
    const maxPrimeLimit: Max<Max<Prime>> = program.maxPrimeLimit ||
        defaultOverrides.maxPrimeLimit ||
        DEFAULT_FIND_COMMAS_OPTIONS.maxPrimeLimit
    const maxN2D3P9: Max<N2D3P9> = program.maxN2d3p9 ||
        defaultOverrides.maxN2D3P9 ||
        DEFAULT_FIND_COMMAS_OPTIONS.maxN2D3P9
    const minCents: Min<Cents> = program.minCents ||
        defaultOverrides.minCents ||
        DEFAULT_FIND_COMMAS_OPTIONS.minCents
    const maxCents: Max<Cents> = program.maxCents ||
        defaultOverrides.maxCents ||
        DEFAULT_FIND_COMMAS_OPTIONS.maxCents
    const maxAas: Max<Abs<ApotomeSlope>> = program.maxAas ||
        defaultOverrides.maxAas ||
        DEFAULT_FIND_COMMAS_OPTIONS.maxAas
    const maxAte: Max<Abs<3 & Integer & Exponent<Prime>>> = program.maxAte ||
        defaultOverrides.maxAte ||
        DEFAULT_FIND_COMMAS_OPTIONS.maxAte

    return { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit, maxN2D3P9, minCents, maxCents, maxAas, maxAte }
}

const parseJiPitchOptions = (): JiPitch => {
    const jiPitchText = program.args[ 0 ] as Io

    let jiPitch: JiPitch
    if (jiPitchText) {
        if (jiPitchText.match(IDENTIFYING_COMMA_NAME_CHARS)) {
            const { commaNameRatio, sizeCategoryName } = parseCommaName(jiPitchText as Name<Comma>)
            jiPitch = { monzo: computeMonzoFrom23FreeClassAndSizeCategoryName({ commaNameRatio, sizeCategoryName }) }
        } else if (jiPitchText.includes("/")) {
            jiPitch = { ratio: parseRatio(jiPitchText as Formatted<Ratio>) }
        } else if (jiPitchText.match(ANY_MONZO_CHARS)) {
            jiPitch = { monzo: parseMonzo(jiPitchText as Formatted<Monzo>) }
        } else {
            const integer = parseInteger(jiPitchText)
            jiPitch = { monzo: computeMonzoFromInteger(integer) }
        }
    } else if (program.monzo) {
        jiPitch = { monzo: program.monzo }
    } else if (program.ratio) {
        jiPitch = { ratio: program.ratio }
    } else if (program.commaName) {
        jiPitch = { monzo: computeMonzoFrom23FreeClassAndSizeCategoryName(program.commaName) }
    } else if (program.integer) {
        jiPitch = { monzo: computeMonzoFromInteger(program.integer) }
    } else {
        throw new Error("Unable to determine monzo for JI pitch.")
    }

    return jiPitch
}

export {
    parseFindCommasOptions,
    parseJiPitchOptions,
}
