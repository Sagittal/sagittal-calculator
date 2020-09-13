import { computeIndentation } from "../../../../../src/scripts/popularityMetricLfc/perfecter/indentation"

describe("computeIndentation", (): void => {
    it("returns the number of spaces equal to 2x the recursive depth", (): void => {
        const actual = computeIndentation(4)

        const expected = "        "
        expect(actual).toBe(expected)
    })
})
