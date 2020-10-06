import { program } from "commander"
import { Abs, Decimal, Exponent, Max, Monzo, Prime } from "../../../../../src/general/math"
import { Pitch } from "../../../../../src/general/music/pitch"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../../src/sagittal/ji"
import { parseJiPitch, parseNotatingCommasSettings } from "../../../../../src/scripts/jiPitch/analyzeJiPitch"
import { DEFAULT_FIND_COMMAS_SETTINGS } from "../../../../../src/scripts/jiPitch/findCommas"
import { jiPitchAnalysisFixture, two3FreeClassAnalysisFixture } from "../../../../helpers/src/scripts/jiPitch/fixtures"

describe("parseNotatingCommasSettings", (): void => {
    const n2d3p9 = DEFAULT_FIND_COMMAS_SETTINGS.maxN2D3P9 + 100 as N2D3P9
    const ate = DEFAULT_FIND_COMMAS_SETTINGS.maxAte + 10 as
        Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>
    const rationalMonzo = [0, ate] as Monzo<{ rational: true }>
    const rationalDecimal = 847300834270 as Decimal<{ rational: true }>             // 47548.9¢
    const jiPitchAnalysis: JiPitchAnalysis = {
        ...jiPitchAnalysisFixture,
        two3FreeClassAnalysis: {
            ...two3FreeClassAnalysisFixture,
            n2d3p9,
        },
        monzo: rationalMonzo,
        decimal: rationalDecimal,
    }

    it("adjusts the max N2D3P9 if the JI pitch has greater than the current settings", (): void => {
        const actual = parseNotatingCommasSettings(jiPitchAnalysis)

        expect(actual.maxN2D3P9).toBe(n2d3p9 as Max<N2D3P9>)
    })

    it("adjusts the max AAS if the JI pitch has greater than the current settings", (): void => {
        const actual = parseNotatingCommasSettings(jiPitchAnalysis)

        expect(actual.maxAas).toBeCloseToTyped(2902.757465 as Max<Abs<ApotomeSlope>>)
    })

    it("adjusts the max ATE if the JI pitch has greater than the current settings", (): void => {
        const actual = parseNotatingCommasSettings(jiPitchAnalysis)

        expect(actual.maxAte).toBe(ate as Max<Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>>)
    })
})

describe("parseJiPitch", (): void => {
    beforeEach((): void => {
        program.args = []
        program.monzo = undefined
        program.quotient = undefined
        program.commaName = undefined
        program.integer = undefined
    })

    describe("when the JI pitch is provided as an argument directly (not as a specific flag)", (): void => {
        it("works for a monzo", (): void => {
            program.args = ["[0, 1, -2, 1⟩"]

            const actual = parseJiPitch()

            const expected = { monzo: [0, 1, -2, 1] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })

        it("works for a quotient", (): void => {
            program.args = ["7/2"]

            const actual = parseJiPitch()

            const expected = { monzo: [-1, 0, 0, 1] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })

        it("works for a comma name", (): void => {
            program.args = ["3A"]

            const actual = parseJiPitch()

            const expected = { monzo: [-11, 7] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })

        it("works for an integer", (): void => {
            program.args = ["3"]

            const actual = parseJiPitch()

            const expected = { monzo: [0, 1] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })
    })

    describe("when the JI pitch is provided by a specific flag", (): void => {
        it("works for a monzo (which will have been pre-parsed)", (): void => {
            program.monzo = [0, 1, -2, 1]

            const actual = parseJiPitch()

            const expected = { monzo: [0, 1, -2, 1] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })

        it("works for a quotient (which will have been pre-parsed)", (): void => {
            program.quotient = [7, 2]

            const actual = parseJiPitch()

            const expected = { monzo: [-1, 0, 0, 1] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })

        it("works for a comma name (which will have been pre-parsed into a comma)", (): void => {
            program.commaName = { monzo: [-11, 7] }

            const actual = parseJiPitch()

            const expected = { monzo: [-11, 7] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })

        it("works for a decimal (which will have been pre-parsed into an integer)", (): void => {
            program.integer = 3

            const actual = parseJiPitch()

            const expected = { monzo: [0, 1] } as Pitch<{ rational: true }>
            expect(actual).toEqual(expected)
        })
    })
})
