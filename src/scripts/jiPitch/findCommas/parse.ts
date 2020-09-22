import { program } from "commander"
import { Abs, Cents, Exponent, Integer, Max, Min, Prime } from "../../../general"
import { ApotomeSlope, N2D3P9 } from "../../../sagittal"
import { DEFAULT_FIND_COMMAS_SETTINGS } from "./constants"
import { FindCommasSettings } from "./types"

const parseFindCommasSettings = (
    defaultOverrides: Partial<FindCommasSettings> = {},
): FindCommasSettings => {
    const max23FreeSopfr = program.max23FreeSopfr ||
        defaultOverrides.max23FreeSopfr ||
        DEFAULT_FIND_COMMAS_SETTINGS.max23FreeSopfr
    const max23FreeCopfr = program.max23FreeCopfr ||
        defaultOverrides.max23FreeCopfr ||
        DEFAULT_FIND_COMMAS_SETTINGS.max23FreeCopfr
    const maxPrimeLimit: Max<Max<Prime>> = program.maxPrimeLimit ||
        defaultOverrides.maxPrimeLimit ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxPrimeLimit
    const maxN2D3P9: Max<N2D3P9> = program.maxN2d3p9 ||
        defaultOverrides.maxN2D3P9 ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxN2D3P9
    // TODO: perhaps minCents and maxCents should be settable by monzo, ratio, etc. too?
    //  in which case...you should also support calling analyze-ji-pitch by a cents value and having it return something
    //  perhaps it's like, it's actually running a find-commas with an extremely small range
    const minCents: Min<Cents> = program.minCents ||
        defaultOverrides.minCents ||
        DEFAULT_FIND_COMMAS_SETTINGS.minCents
    const maxCents: Max<Cents> = program.maxCents ||
        defaultOverrides.maxCents ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxCents
    const maxAas: Max<Abs<ApotomeSlope>> = program.maxAas ||
        defaultOverrides.maxAas ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxAas
    const maxAte: Max<Abs<Integer & Exponent<3 & Prime>>> = program.maxAte ||
        defaultOverrides.maxAte ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxAte

    return { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit, maxN2D3P9, minCents, maxCents, maxAas, maxAte }
}

export {
    parseFindCommasSettings,
}
