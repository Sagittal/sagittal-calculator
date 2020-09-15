import { Ratio } from "../../../../../src/general"
import { formatRatio } from "../../../../../src/general/io"

describe("formatRatio", (): void => {
    it("it shows it with a slash", (): void => {
        const ratio = [77, 75] as Ratio

        const actual = formatRatio(ratio)

        const expected = "77/75"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon", (): void => {
        const ratio = [64, 65] as Ratio

        const actual = formatRatio(ratio, { directed: false })

        const expected = "64:65"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon, and orients it properly", (): void => {
        const ratio = [77, 75] as Ratio

        const actual = formatRatio(ratio, { directed: false })

        const expected = "75:77"
        expect(actual).toBe(expected)
    })
})
