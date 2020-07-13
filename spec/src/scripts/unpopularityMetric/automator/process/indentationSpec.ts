import { computeIndentation } from "../../../../../../src/scripts/unpopularityMetric/automator/process/indentation"

describe("computeIndentation", () => {
    it("returns the number of spaces equal to 2x the recursive depth", () => {
        const result = computeIndentation(4)

        expect(result).toBe("        ")
    })
})
