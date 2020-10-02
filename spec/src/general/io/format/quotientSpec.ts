import { RealQuotient } from "../../../../../src/general"
import { formatQuotient } from "../../../../../src/general/io"

describe("formatQuotient", (): void => {
    it("it shows it with a slash", (): void => {
        const realQuotient = [77, 75] as RealQuotient

        const actual = formatQuotient(realQuotient)

        const expected = "77/75"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon", (): void => {
        const realQuotient = [64, 65] as RealQuotient

        const actual = formatQuotient(realQuotient, { directed: false })

        const expected = "64:65"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon, and orients it properly", (): void => {
        const realQuotient = [77, 75] as RealQuotient

        const actual = formatQuotient(realQuotient, { directed: false })

        const expected = "75:77"
        expect(actual).toBe(expected)
    })
})
