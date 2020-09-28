import { Quotient } from "../../../../../src/general"
import { formatQuotient } from "../../../../../src/general/io"

describe("formatQuotient", (): void => {
    it("it shows it with a slash", (): void => {
        const quotient = [77, 75] as Quotient

        const actual = formatQuotient(quotient)

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
})
