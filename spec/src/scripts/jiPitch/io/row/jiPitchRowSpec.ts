import {Abs, Cents, Count, Exponent, Max, Monzo, Prime, Quotient, Row} from "@sagittal/general"
import {ApotomeSlope, Ate, JiPitchAnalysis} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../../../../../src/scripts/jiPitch/globals"
import {computeJiPitchRow} from "../../../../../../src/scripts/jiPitch/io/row"
import {JiPitchField} from "../../../../../../src/scripts/jiPitch/types"
import {
    jiPitchAnalysisFixture,
    two3FreeClassAnalysisFixture,
} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeJiPitchRow", (): void => {
    const jiPitchAnalysis: JiPitchAnalysis = {
        ...jiPitchAnalysisFixture,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo<{rational: true}>,
        quotient: [5, 4] as Quotient<{rational: true}>,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Ate,
        two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
    }
    const maxMonzoLength = 5 as Max<Count<Exponent<Prime>>>

    it("returns a row of information about the JI pitch", (): void => {
        const actual = computeJiPitchRow(jiPitchAnalysis, maxMonzoLength)
        const expected = [
            "5",                // Quotient numerator
            "/",                // Quotient vinculum
            "4",                // Quotient denominator
            "[",                // Monzo [
            "  0    ",          // Monzo 2
            " -1    ",          // Monzo 3
            "  1    ",          // Monzo 5
            "",                 // Monzo 7
            "",                 // Monzo 11
            "⟩",                // Monzo ⟩
            "        11.200¢",  // Cents
            "  8.200",          // Apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{of: JiPitchAnalysis, header: true}>
        expect(actual).toEqual(expected)
    })

    it("can filter the excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields = [JiPitchField.APOTOME_SLOPE, JiPitchField.QUOTIENT]
        const actual = computeJiPitchRow(jiPitchAnalysis, maxMonzoLength)

        const expected = [
            "[",                // Monzo [
            "  0    ",          // Monzo 2
            " -1    ",          // Monzo 3
            "  1    ",          // Monzo 5
            "",                 // Monzo 7
            "",                 // Monzo 11
            "⟩",                // Monzo ⟩
            "        11.200¢",  // Cents
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{of: JiPitchAnalysis, header: true}>
        expect(actual).toEqual(expected)
    })
})
