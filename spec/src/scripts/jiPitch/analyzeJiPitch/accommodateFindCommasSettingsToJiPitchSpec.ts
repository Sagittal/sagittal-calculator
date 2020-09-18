import { Abs, Exponent, Integer, Max, Monzo, Prime } from "../../../../../src/general/math"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../../src/sagittal/comma"
import { accommodateFindCommasSettingsToJiPitch } from "../../../../../src/scripts/jiPitch/analyzeJiPitch"
import { DEFAULT_FIND_COMMAS_SETTINGS } from "../../../../../src/scripts/jiPitch/findCommas"
import {
    jiPitchAnalysisFixture,
    twoThreeFreeClassAnalysisFixture,
} from "../../../../helpers/src/scripts/jiPitch/fixtures"

describe("accommodateFindCommasSettingsToJiPitch", (): void => {
    const n2d3p9 = DEFAULT_FIND_COMMAS_SETTINGS.maxN2D3P9 + 100 as N2D3P9
    const apotomeSlope = DEFAULT_FIND_COMMAS_SETTINGS.maxAas + 10 as ApotomeSlope
    const ate = DEFAULT_FIND_COMMAS_SETTINGS.maxAte + 10 as Abs<3 & Integer & Exponent<Prime>>
    const monzo = [0, ate] as Monzo

    it("adjusts the max N2D3P9 if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            twoThreeFreeClassAnalysis: {
                ...twoThreeFreeClassAnalysisFixture,
                n2d3p9,
            },
        }

        const actual = accommodateFindCommasSettingsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_SETTINGS)

        expect(actual.maxN2D3P9).toBe(n2d3p9 as Max<N2D3P9>)
    })

    it("adjusts the max AAS if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            apotomeSlope,
        }

        const actual = accommodateFindCommasSettingsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_SETTINGS)

        expect(actual.maxAas).toBe(apotomeSlope as Max<Abs<ApotomeSlope>>)
    })

    it("adjusts the max ATE if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            monzo,
        }

        const actual = accommodateFindCommasSettingsToJiPitch(jiPitchAnalysis, DEFAULT_FIND_COMMAS_SETTINGS)

        expect(actual.maxAte).toBe(ate as Max<Abs<3 & Integer & Exponent<Prime>>>)
    })
})
