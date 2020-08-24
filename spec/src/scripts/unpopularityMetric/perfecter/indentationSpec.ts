import { computeIndentation } from "../../../../../src/scripts/unpopularityMetric/perfecter/indentation"

describe("computeIndentation", () => {
    it("returns the number of spaces equal to 2x the recursive depth", () => {
        const actual = computeIndentation(4)

        const expected = "        "
        expect(actual).toBe(expected)
    })
})
