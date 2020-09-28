import { Row } from "../../../../../../src/general/io/table"
import { Abs, Exponent, IntegerDecimal, Prime, RationalMonzo, RationalQuotient } from "../../../../../../src/general/math"
import { Cents } from "../../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis } from "../../../../../../src/sagittal/ji"
import { jiPitchScriptGroupSettings } from "../../../../../../src/scripts/jiPitch/globals"
import { computeJiPitchRow } from "../../../../../../src/scripts/jiPitch/io/row"
import { JiPitchField } from "../../../../../../src/scripts/jiPitch/types"
import {
    jiPitchAnalysisFixture,
    two3FreeClassAnalysisFixture,
} from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeJiPitchRow", (): void => {
    const jiPitchAnalysis: JiPitchAnalysis = {
        ...jiPitchAnalysisFixture,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as RationalMonzo,
        quotient: [5, 4] as RationalQuotient,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Abs<IntegerDecimal & Exponent<3 & Prime>>,
        two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
    }

    it("returns a row of information about the JI pitch", (): void => {
        const actual = computeJiPitchRow(jiPitchAnalysis)

        const expected = [
            "5/4",              // Quotient
            "[   0  -1   1 ⟩",  // Monzo
            "        11.200¢",  // Cents
            "  8.200",          // Apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: JiPitchAnalysis, header: true }>
        expect(actual).toEqual(expected)
    })

    it("can filter the excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields = [JiPitchField.APOTOME_SLOPE, JiPitchField.QUOTIENT]
        const actual = computeJiPitchRow(jiPitchAnalysis)

        const expected = [
            "[   0  -1   1 ⟩",  // Monzo
            "        11.200¢",  // Cents
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: JiPitchAnalysis, header: true }>
        expect(actual).toEqual(expected)
    })
})
