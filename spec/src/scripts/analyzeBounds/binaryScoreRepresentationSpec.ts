import { computeBinaryScoreRepresentationIndex } from "../../../../src/scripts/analyzeBounds/binaryScoreRepresentationCardinality"
import { EventRank } from "../../../../src/scripts/analyzeBounds/types"

describe("computeBinaryScoreRepresentationIndex", () => {
    it("gives the correct index for the power-of-two-based score", () => {
        expect(computeBinaryScoreRepresentationIndex(0 as EventRank, 4)).toBe(0)
        expect(computeBinaryScoreRepresentationIndex(0 as EventRank, 3)).toBe(1)
        expect(computeBinaryScoreRepresentationIndex(0 as EventRank, 2)).toBe(2)
        expect(computeBinaryScoreRepresentationIndex(0 as EventRank, 1)).toBe(3)
        expect(computeBinaryScoreRepresentationIndex(0 as EventRank, 0)).toBe(4)

        expect(computeBinaryScoreRepresentationIndex(1 as EventRank, 4)).toBe(5)
        expect(computeBinaryScoreRepresentationIndex(1 as EventRank, 3)).toBe(6)
        expect(computeBinaryScoreRepresentationIndex(1 as EventRank, 2)).toBe(7)
        expect(computeBinaryScoreRepresentationIndex(1 as EventRank, 1)).toBe(8)
        expect(computeBinaryScoreRepresentationIndex(1 as EventRank, 0)).toBe(9)

        expect(computeBinaryScoreRepresentationIndex(2 as EventRank, 4)).toBe(10)
        expect(computeBinaryScoreRepresentationIndex(2 as EventRank, 3)).toBe(11)
        expect(computeBinaryScoreRepresentationIndex(2 as EventRank, 2)).toBe(12)
        expect(computeBinaryScoreRepresentationIndex(2 as EventRank, 1)).toBe(13)
        expect(computeBinaryScoreRepresentationIndex(2 as EventRank, 0)).toBe(14)
    })
})
