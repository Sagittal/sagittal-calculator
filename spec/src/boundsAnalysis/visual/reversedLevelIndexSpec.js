const {computeReversedLevelIndex} = require("../../../../src/boundsAnalysis/visual/reversedLevelIndex")

describe("computeReversedLevelIndex", () => {
    it("returns 0 for the highest level, which is 4, and descends from there", () => {
        expect(computeReversedLevelIndex(4)).toBe(0)
        expect(computeReversedLevelIndex(3)).toBe(1)
        expect(computeReversedLevelIndex(2)).toBe(2)
        expect(computeReversedLevelIndex(1)).toBe(3)
        expect(computeReversedLevelIndex(0)).toBe(4)
    })
})
