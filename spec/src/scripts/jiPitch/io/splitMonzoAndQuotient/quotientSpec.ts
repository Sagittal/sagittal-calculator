import {ioSettings, TableFormat} from "../../../../../../src/general/io"
import {Formatted} from "../../../../../../src/general/io/format"
import {Quotient} from "../../../../../../src/general/math/numeric/quotient"
import {JiPitchAnalysis} from "../../../../../../src/sagittal/ji/pitch"
import {formatSplitQuotient} from "../../../../../../src/scripts/jiPitch/io/splitMonzoAndQuotient"

describe("formatSplitQuotient", (): void => {
    const quotient = [7, 6] as Quotient<{rational: true}>

    it("splits the quotient into the numerator, vinculum, and denominator", (): void => {
        const actual = formatSplitQuotient(quotient)

        const expected = ["7", "/", "6"] as Array<Formatted<JiPitchAnalysis>>
        expect(actual).toEqual(expected)
    })

    it("when formatting for the forum, leaves the LaTeX-formatted quotient as a single element in an array to be spread      ", (): void => {
        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatSplitQuotient(quotient)

        const expected = ["[/pre][latex]\\frac{7}{6}[/latex][pre]"] as Array<Formatted<JiPitchAnalysis>>
        expect(actual).toEqual(expected)
    })

    it("works for a quotient with a 1 denominator", (): void => {
        const quotient = [7, 1] as Quotient<{rational: true}>

        const actual = formatSplitQuotient(quotient)

        const expected = ["7", "/", "1"] as Array<Formatted<JiPitchAnalysis>>
        expect(actual).toEqual(expected)
    })
})
