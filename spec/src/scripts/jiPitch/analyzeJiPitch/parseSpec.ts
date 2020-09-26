import { program } from "commander"
import { Abs, Decimal, Exponent, Integer, Max, Monzo, Prime, Ratio } from "../../../../../src/general/math"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../../src/sagittal/ji"
import { parseJiPitch, parseNotatingCommasSettings } from "../../../../../src/scripts/jiPitch/analyzeJiPitch"
import { DEFAULT_FIND_COMMAS_SETTINGS } from "../../../../../src/scripts/jiPitch/findCommas"
import {
    jiPitchAnalysisFixture,
    twoThreeFreeClassAnalysisFixture,
} from "../../../../helpers/src/scripts/jiPitch/fixtures"

describe("parseNotatingCommasSettings", (): void => {
    const n2d3p9 = DEFAULT_FIND_COMMAS_SETTINGS.maxN2D3P9 + 100 as N2D3P9
    const ate = DEFAULT_FIND_COMMAS_SETTINGS.maxAte + 10 as Abs<Integer & Exponent<3 & Prime>>
    const monzo = [0, ate] as Monzo
    const decimal = 847300834270 as Decimal             // 47548.9¢
    const apotomeSlope = -2902.759003 as ApotomeSlope
    const jiPitchAnalysis: JiPitchAnalysis = {
        ...jiPitchAnalysisFixture,
        twoThreeFreeClassAnalysis: {
            ...twoThreeFreeClassAnalysisFixture,
            n2d3p9,
        },
        monzo,
        decimal,
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

        expect(actual.maxAte).toBe(ate as Max<Abs<Integer & Exponent<3 & Prime>>>)
    })
})

describe("parseJiPitch", (): void => {
    beforeEach((): void => {
        program.args = []
        program.monzo = undefined
        program.ratio = undefined
        program.commaName = undefined
        program.integer = undefined
    })

    describe("when the JI pitch is provided as an argument directly (not as a specific flag)", (): void => {
        it("works for a monzo", (): void => {
            program.args = ["[0, 1, -2, 1⟩"]

            const actual = parseJiPitch()

            const expected = { monzo: [0, 1, -2, 1] as Monzo }
            expect(actual).toEqual(expected)
        })

        it("works for a ratio", (): void => {
            program.args = ["7/2"]

            const actual = parseJiPitch()

            const expected = { ratio: [7, 2] as Ratio }
            expect(actual).toEqual(expected)
        })

        it("works for a comma name", (): void => {
            program.args = ["3A"]

            const actual = parseJiPitch()

            const expected = { monzo: [-11, 7] as Monzo }
            expect(actual).toEqual(expected)
        })

        it("works for an integer", (): void => {
            program.args = ["3"]

            const actual = parseJiPitch()

            const expected = { decimal: 3 as Integer }
            expect(actual).toEqual(expected)
        })
    })

    describe("when the JI pitch is provided by a specific flag", (): void => {
        it("works for a monzo (which will have been pre-parsed)", (): void => {
            program.monzo = [0, 1, -2, 1]

            const actual = parseJiPitch()

            const expected = { monzo: [0, 1, -2, 1] as Monzo }
            expect(actual).toEqual(expected)
        })

        it("works for a ratio (which will have been pre-parsed)", (): void => {
            program.ratio = [7, 2]

            const actual = parseJiPitch()

            const expected = { ratio: [7, 2] as Ratio }
            expect(actual).toEqual(expected)
        })

        it("works for a comma name (which will have been pre-parsed into a monzo)", (): void => {
            program.commaName = [-11, 7]

            const actual = parseJiPitch()

            const expected = { monzo: [-11, 7] as Monzo }
            expect(actual).toEqual(expected)
        })

        it("works for an (integer) decimal (which will have been pre-parsed into an integer)", (): void => {
            program.integer = 3

            const actual = parseJiPitch()

            const expected = { decimal: 3 as Integer }
            expect(actual).toEqual(expected)
        })
    })
})
