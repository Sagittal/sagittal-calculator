import { Basis, Cents, Multiplier } from "../../../../../../src/general"
import { computeReversedJiNotationLevelIndex } from "../../../../../../src/scripts/jiNotationBound/io/image/reversedLevelIndex"

describe("computeReversedJiNotationLevelIndex", (): void => {
    it("returns 0 for the highest JI notation level, which is 4, and descends from there", (): void => {
        expect(computeReversedJiNotationLevelIndex(4)).toBe(0 as Multiplier<Basis<Cents>>)
        expect(computeReversedJiNotationLevelIndex(3)).toBe(1 as Multiplier<Basis<Cents>>)
        expect(computeReversedJiNotationLevelIndex(2)).toBe(2 as Multiplier<Basis<Cents>>)
        expect(computeReversedJiNotationLevelIndex(1)).toBe(3 as Multiplier<Basis<Cents>>)
        expect(computeReversedJiNotationLevelIndex(0)).toBe(4 as Multiplier<Basis<Cents>>)
    })
})
