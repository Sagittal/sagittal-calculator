import {program} from "commander"
import {Abs, Max, Min, Prime, Scamon} from "../../../general"
import {ApotomeSlope, Ate, JiPitchAnalysis, N2D3P9} from "../../../sagittal"
import {DEFAULT_FIND_COMMAS_OPTIONS} from "./constants"
import {FindCommasOptions} from "./types"

const computeFindCommasOptions = (
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
    const lowerBound: Min<Scamon> = program.lowerBound ||
        defaultOverrides.lowerBound ||
        DEFAULT_FIND_COMMAS_OPTIONS.lowerBound
    const upperBound: Max<Scamon> = program.upperBound ||
        defaultOverrides.upperBound ||
        DEFAULT_FIND_COMMAS_OPTIONS.upperBound
    const maxAas: Max<Abs<ApotomeSlope>> = program.maxAas ||
        defaultOverrides.maxAas ||
        DEFAULT_FIND_COMMAS_OPTIONS.maxAas
    const maxAte: Max<Ate> = program.maxAte ||
        defaultOverrides.maxAte ||
        DEFAULT_FIND_COMMAS_OPTIONS.maxAte
    const inclusive: boolean = program.inclusive ||
        defaultOverrides.inclusive ||
        DEFAULT_FIND_COMMAS_OPTIONS.inclusive

    return {max23FreeSopfr, max23FreeCopfr, maxPrimeLimit, maxN2D3P9, lowerBound, upperBound, maxAas, maxAte, inclusive}
}

const computeFindNotatingCommasOptions = ({ate, aas, two3FreeClassAnalysis}: JiPitchAnalysis): FindCommasOptions => {
    const findCommasOptions = computeFindCommasOptions()

    if (aas > findCommasOptions.maxAas) {
        findCommasOptions.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    if (ate > findCommasOptions.maxAte) {
        findCommasOptions.maxAte = ate as Max<Ate>
    }

    const {n2d3p9} = two3FreeClassAnalysis
    if (n2d3p9 > findCommasOptions.maxN2D3P9) {
        findCommasOptions.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return findCommasOptions
}

export {
    computeFindCommasOptions,
    computeFindNotatingCommasOptions,
}
