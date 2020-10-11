import { Formatted } from "../../../../../../src/general/io/format"
import { Quotient } from "../../../../../../src/general/math/numeric/quotient"
import { JiPitchAnalysis } from "../../../../../../src/sagittal/ji/pitch"
import { formatSplitQuotient } from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("formatSplitQuotient", (): void => {
    it("splits the quotient into the numerator, vinculum, and denominator", (): void => {
        const quotient = [7, 6] as Quotient<{ rational: true }>

        const actual = formatSplitQuotient(quotient)

        const expected = ["7", "/", "6"] as Array<Formatted<JiPitchAnalysis>>
        expect(actual).toEqual(expected)
    })
})
