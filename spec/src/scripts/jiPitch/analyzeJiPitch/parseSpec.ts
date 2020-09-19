import { Abs, Exponent, Integer, Max, Monzo, Prime } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../../src/sagittal/ji"
import { parseNotatingCommasSettings } from "../../../../../src/scripts/jiPitch/analyzeJiPitch"
import { DEFAULT_FIND_COMMAS_SETTINGS } from "../../../../../src/scripts/jiPitch/findCommas"
import {
    jiPitchAnalysisFixture,
    twoThreeFreeClassAnalysisFixture,
} from "../../../../helpers/src/scripts/jiPitch/fixtures"

describe("parseNotatingCommasSettings", (): void => {
    const n2d3p9 = DEFAULT_FIND_COMMAS_SETTINGS.maxN2D3P9 + 100 as N2D3P9
    const ate = DEFAULT_FIND_COMMAS_SETTINGS.maxAte + 10 as Abs<3 & Integer & Exponent<Prime>>
    const monzo = [0, ate] as Monzo
    const cents = 47548.9 as Cents
    const apotomeSlope = -2902.759003 as ApotomeSlope
    const jiPitchAnalysis: JiPitchAnalysis = {
        ...jiPitchAnalysisFixture,
        twoThreeFreeClassAnalysis: {
            ...twoThreeFreeClassAnalysisFixture,
            n2d3p9,
        },
        monzo,
        cents,
    }

    it("adjusts the max N2D3P9 if the JI pitch has greater than the current settings", (): void => {
        const actual = parseNotatingCommasSettings(jiPitchAnalysis)

        expect(actual.maxN2D3P9).toBe(n2d3p9 as Max<N2D3P9>)
    })

    it("adjusts the max AAS if the JI pitch has greater than the current settings", (): void => {
        const actual = parseNotatingCommasSettings(jiPitchAnalysis)

        expect(actual.maxAas).toBeCloseToTyped(-apotomeSlope as Max<Abs<ApotomeSlope>>)
    })

    it("adjusts the max ATE if the JI pitch has greater than the current settings", (): void => {
        const actual = parseNotatingCommasSettings(jiPitchAnalysis)

        expect(actual.maxAte).toBe(ate as Max<Abs<3 & Integer & Exponent<Prime>>>)
    })
})
