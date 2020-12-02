import {Abs, Decimal, Max, Monzo, Scamon} from "../../../../../src/general"
import {ApotomeSlope, Ate, computeAas, JiPitchAnalysis, N2D3P9} from "../../../../../src/sagittal"
import {
    computeFindNotatingCommasOptions,
    DEFAULT_FIND_COMMAS_OPTIONS,
} from "../../../../../src/scripts/jiPitch/findCommas"
import {jiPitchAnalysisFixture, two3FreeClassAnalysisFixture} from "../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeFindNotatingCommasOptions", (): void => {
    const n2d3p9 = DEFAULT_FIND_COMMAS_OPTIONS.maxN2D3P9 + 100 as N2D3P9
    const ate = DEFAULT_FIND_COMMAS_OPTIONS.maxAte + 10 as Ate
    const monzo = [0, ate] as Monzo<{rational: true}>
    const pitch = {monzo} as Scamon<{rational: true}>
    const aas = computeAas(pitch)
    const decimal = 847300834270 as Decimal<{rational: true}>             // 47548.9¢
    const jiPitchAnalysis: JiPitchAnalysis = {
        ...jiPitchAnalysisFixture,
        ate,
        aas,
        two3FreeClassAnalysis: {
            ...two3FreeClassAnalysisFixture,
            n2d3p9,
        },
        decimal,
        pitch,
    }

    it("adjusts the max N2D3P9 if the JI pitch has greater than the current options", (): void => {
        const actual = computeFindNotatingCommasOptions(jiPitchAnalysis)

        expect(actual.maxN2D3P9).toBe(n2d3p9 as Max<N2D3P9>)
    })

    it("adjusts the max AAS if the JI pitch has greater than the current options", (): void => {
        const actual = computeFindNotatingCommasOptions(jiPitchAnalysis)

        expect(actual.maxAas).toBeCloseToTyped(3483.308958 as Max<Abs<ApotomeSlope>>)
    })

    it("adjusts the max ATE if the JI pitch has greater than the current options", (): void => {
        const actual = computeFindNotatingCommasOptions(jiPitchAnalysis)

        expect(actual.maxAte).toBe(ate as Max<Ate>)
    })
})
