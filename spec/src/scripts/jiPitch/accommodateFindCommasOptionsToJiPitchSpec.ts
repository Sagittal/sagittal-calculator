import { Abs, Exponent, Integer, Max, Monzo, Prime } from "../../../../src/general/math"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../src/sagittal/comma"
import { DEFAULT_FIND_COMMAS_OPTIONS } from "../../../../src/sagittal/comma/find/constants"
import { accommodateFindCommasOptionsToJiPitch } from "../../../../src/scripts/jiPitch/accommodateFindCommasOptionsToJiPitch"
import { jiPitchAnalysisFixture } from "../../../helpers/src/scripts/jiPitch/fixtures"

describe("accommodateFindCommasOptionsToJiPitch", (): void => {
    const n2d3p9 = DEFAULT_FIND_COMMAS_OPTIONS.maxN2D3P9 + 100 as N2D3P9
    const apotomeSlope = DEFAULT_FIND_COMMAS_OPTIONS.maxAas + 10 as ApotomeSlope
    const ate = DEFAULT_FIND_COMMAS_OPTIONS.maxAte + 10 as Abs<3 & Integer & Exponent<Prime>>
    const monzo = [0, ate] as Monzo

    it("adjusts the max N2D3P9 if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            n2d3p9,
        }

        const actual = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_OPTIONS)

        expect(actual.maxN2D3P9).toBe(n2d3p9 as Max<N2D3P9>)
    })

    it("adjusts the max AAS if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            apotomeSlope,
        }

        const actual = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_OPTIONS)

        expect(actual.maxAas).toBe(apotomeSlope as Max<Abs<ApotomeSlope>>)
    })

    it("adjusts the max ATE if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            monzo,
        }

        const actual = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_OPTIONS)

        expect(actual.maxAte).toBe(ate as Max<Abs<3 & Integer & Exponent<Prime>>>)
    })

    // it("adjusts the max cents if the JI pitch has greater than the current settings", (): void => {
    //     const jiPitchAnalysis: JiPitchAnalysis = {
    //         ...jiPitchAnalysisFixture,
    //         cents: APOTOME_CENTS,
    //     }
    //
    //     const actual = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_OPTIONS)
    //
    //     expect(actual.maxCents).toBe(APOTOME_CENTS as Max<Cents>)
    // })
    //
    // it("adjusts the min cents if the JI pitch has less than the current settings", (): void => {
    //     const jiPitchAnalysis: JiPitchAnalysis = {
    //         ...jiPitchAnalysisFixture,
    //         cents: negative(APOTOME_CENTS),
    //     }
    //
    //     const actual = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_OPTIONS)
    //
    //     expect(actual.minCents).toBe(negative(APOTOME_CENTS) as Min<Cents>)
    // })
    //
    // it("does not adjust the max or min cents at all if it is outside the max nameable range", (): void => {
    //     const jiPitchAnalysis: JiPitchAnalysis = {
    //         ...jiPitchAnalysisFixture,
    //         cents: APOTOME_CENTS * -3 as Cents,
    //     }
    //
    //     const actual = accommodateFindCommasOptionsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_OPTIONS)
    //
    //     expect(actual.minCents).toBe(0 as Min<Cents>)
    // })
})
