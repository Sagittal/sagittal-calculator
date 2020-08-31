import { Basis, Cents, Multiplier } from "../../../../../../src/general"
import { computeReversedLevelIndex } from "../../../../../../src/scripts/bound/io/image/reversedLevelIndex"

describe("computeReversedLevelIndex", () => {
    it("returns 0 for the highest level, which is 4, and descends from there", () => {
        expect(computeReversedLevelIndex(4)).toBe(0 as Multiplier<Basis<Cents>>)
        expect(computeReversedLevelIndex(3)).toBe(1 as Multiplier<Basis<Cents>>)
        expect(computeReversedLevelIndex(2)).toBe(2 as Multiplier<Basis<Cents>>)
        expect(computeReversedLevelIndex(1)).toBe(3 as Multiplier<Basis<Cents>>)
        expect(computeReversedLevelIndex(0)).toBe(4 as Multiplier<Basis<Cents>>)
    })
})
