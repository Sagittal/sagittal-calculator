import { Formatted, ioSettings, Quotient, TableFormat, Two3FreeClass } from "../../../../../src/general"
import { formatQuotient } from "../../../../../src/general/io"

describe("formatQuotient", (): void => {
    it("it shows it with a slash", (): void => {
        const quotient = [77, 75] as Quotient

        const actual = formatQuotient(quotient, ioSettings)

        const expected = "77/75"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon", (): void => {
        const quotient = [64, 65] as Quotient

        const actual = formatQuotient(quotient, { directed: false })

        const expected = "64:65"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon, and orients it properly", (): void => {
        const quotient = [77, 75] as Quotient

        const actual = formatQuotient(quotient, { directed: false })

        const expected = "75:77"
        expect(actual).toBe(expected)
    })

    it("can format it for the forum, using the LaTeX bbCode, and canceling out the pre tag so it will display properly           ", (): void => {
       const quotient = [77, 75] as Quotient

        ioSettings.tableFormat = TableFormat.FORUM
        const actual = formatQuotient(quotient, ioSettings)

        const expected = "[/pre][latex]\\frac{77}{75}[/latex][pre]" as Formatted<Two3FreeClass>
        expect(actual).toBe(expected)
    })
})
