import { Row } from "../../../../../../src/general/io/table"
import { Abs, Exponent, Integer, Prime } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/num/monzo"
import { Ratio } from "../../../../../../src/general/math/num/ratio"
import { Cents } from "../../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis } from "../../../../../../src/sagittal/ji"
import { jiPitchScriptGroupSettings } from "../../../../../../src/scripts/jiPitch/globals"
import { computeJiPitchRow } from "../../../../../../src/scripts/jiPitch/io/row"
import { JiPitchField } from "../../../../../../src/scripts/jiPitch/types"
import { twoThreeFreeClassAnalysisFixture } from "../../../../../helpers/src/scripts/jiPitch/fixtures"

describe("computeJiPitchRow", (): void => {
    const jiPitchAnalysis: JiPitchAnalysis = {
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        apotomeSlope: 8.2 as ApotomeSlope,
        aas: 8.2 as Abs<ApotomeSlope>,
        ate: 1 as Abs<Integer & Exponent<3 & Prime>>,
        twoThreeFreeClassAnalysis: twoThreeFreeClassAnalysisFixture,
    }

    it("returns a row of information about the JI pitch", (): void => {
        const actual = computeJiPitchRow(jiPitchAnalysis)

        const expected = [
            "5/4",              // ratio
            "[   0  -1   1 ⟩",  // monzo
            "        11.200¢",  // cents
            "  8.200",          // apotome slope
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: JiPitchAnalysis, header: true }>
        expect(actual).toEqual(expected)
    })

    it("can filter the excluded fields", (): void => {
        jiPitchScriptGroupSettings.excludedFields = [JiPitchField.APOTOME_SLOPE, JiPitchField.RATIO]
        const actual = computeJiPitchRow(jiPitchAnalysis)

        const expected = [
            "[   0  -1   1 ⟩",  // monzo
            "        11.200¢",  // cents
            "  8.200",          // AAS
            "  1    ",          // ATE
        ] as Row<{ of: JiPitchAnalysis, header: true }>
        expect(actual).toEqual(expected)
    })
})
