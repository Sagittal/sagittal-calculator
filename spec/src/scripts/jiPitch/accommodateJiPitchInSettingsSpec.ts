import { Abs, Exponent, Integer, Max, Monzo, Prime } from "../../../../src/general/math"
import {
    DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    DEFAULT_MAX_ABS_3_EXPONENT,
    DEFAULT_MAX_ABS_APOTOME_SLOPE,
} from "../../../../src/sagittal"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../src/sagittal/comma"
import { accommodateJiPitchInSettings } from "../../../../src/scripts/jiPitch/accommodateJiPitchInSettings"
import { jiPitchScriptGroupSettings } from "../../../../src/scripts/jiPitch/globals"
import { jiPitchAnalysisFixture } from "../../../helpers/src/scripts/jiPitch/fixtures"

describe("accommodateJiPitchInSettings", (): void => {
    const n2d3p9 = 400 as N2D3P9
    const apotomeSlope = 40 as ApotomeSlope
    const abs3Exponent = 40 as Abs<3 & Integer & Exponent<Prime>>
    const monzo = [0, abs3Exponent] as Monzo

    it("adjusts the max N2D3P9 if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            n2d3p9,
        }

        accommodateJiPitchInSettings(jiPitchAnalysis)

        expect(jiPitchScriptGroupSettings.maxN2D3P9).toBe(n2d3p9 as Max<N2D3P9>)
    })

    it("adjusts the max abs apotome slope if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            apotomeSlope,
        }

        accommodateJiPitchInSettings(jiPitchAnalysis)

        expect(jiPitchScriptGroupSettings.maxAbsApotomeSlope).toBe(apotomeSlope as Max<Abs<ApotomeSlope>>)
    })

    it("adjusts the max abs 3 exponent if the JI pitch has greater than the current settings", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            monzo,
        }

        accommodateJiPitchInSettings(jiPitchAnalysis)

        expect(jiPitchScriptGroupSettings.maxAbs3Exponent).toBe(abs3Exponent as Max<Abs<3 & Integer & Exponent<Prime>>>)
    })

    // Note: I decided to eliminate this stuff once confronted with the question of what to set the min/max cents to
    // if it is outside the max nameable range. It got me thinking that it probably doesn't make sense in the same way
    // as it does for the abs 3 exponent, abs apotome slope, and N2D3P9 to adjust the settings
    // it("adjusts the max cents if the JI pitch has greater than the current settings", (): void => {
    //     const jiPitchAnalysis: JiPitchAnalysis = {
    //         ...jiPitchAnalysisFixture,
    //         cents: APOTOME_CENTS,
    //     }
    //
    //     accommodateJiPitchInSettings(jiPitchAnalysis)
    //
    //     expect(jiPitchScriptGroupSettings.maxCents).toBe(APOTOME_CENTS as Max<Cents>)
    // })
    //
    // it("adjusts the min cents if the JI pitch has less than the current settings", (): void => {
    //     const jiPitchAnalysis: JiPitchAnalysis = {
    //         ...jiPitchAnalysisFixture,
    //         cents: negative(APOTOME_CENTS),
    //     }
    //
    //     accommodateJiPitchInSettings(jiPitchAnalysis)
    //
    //     expect(jiPitchScriptGroupSettings.minCents).toBe(negative(APOTOME_CENTS) as Min<Cents>)
    // })
    //
    // it("does not adjust the max or min cents outside the max nameable range", (): void => {
    //     const jiPitchAnalysis: JiPitchAnalysis = {
    //         ...jiPitchAnalysisFixture,
    //         cents: APOTOME_CENTS * 3 as Cents,
    //     }
    //
    //     accommodateJiPitchInSettings(jiPitchAnalysis)
    //
    //     expect(jiPitchScriptGroupSettings.minCents).toBe(APOTOME_CENTS * 2 as Min<Cents>)
    // })

    it("does none of this if the option to suppress it is on", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            ...jiPitchAnalysisFixture,
            n2d3p9,
            apotomeSlope,
            monzo,
            // cents: APOTOME_CENTS,
        }
        const suppress = true

        accommodateJiPitchInSettings(jiPitchAnalysis, { suppress })

        expect(jiPitchScriptGroupSettings.maxN2D3P9).toBe(DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9)
        expect(jiPitchScriptGroupSettings.maxAbsApotomeSlope).toBe(DEFAULT_MAX_ABS_APOTOME_SLOPE)
        expect(jiPitchScriptGroupSettings.maxAbs3Exponent).toBe(DEFAULT_MAX_ABS_3_EXPONENT)
        // expect(jiPitchScriptGroupSettings.maxCents).toBe(DEFAULT_MAX_CENTS)
        // expect(jiPitchScriptGroupSettings.minCents).toBe(DEFAULT_MIN_CENTS)
    })
})
