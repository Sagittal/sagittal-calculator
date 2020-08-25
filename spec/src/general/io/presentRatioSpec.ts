import { Ratio } from "../../../../src/general"
import { presentRatio } from "../../../../src/general/io"

describe("presentRatio", () => {
    it("it shows it with a slash", () => {
        const ratio = [77, 75] as Ratio

        const actual = presentRatio(ratio)

        const expected = "77/75"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon", () => {
        const ratio = [64, 65] as Ratio

        const actual = presentRatio(ratio, { directed: false })

        const expected = "64:65"
        expect(actual).toBe(expected)
    })

    it("it can show it undirected, with a colon, and orients it properly", () => {
        const ratio = [77, 75] as Ratio

        const actual = presentRatio(ratio, { directed: false })

        const expected = "75:77"
        expect(actual).toBe(expected)
    })
})
