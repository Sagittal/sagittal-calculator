import { Integer, Rank } from "../../../../../src/general"
import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeBinaryScoreRepresentationIndex } from "../../../../../src/scripts/bound/analyzedHistory/binaryScoreRepresentationCardinality"

describe("computeBinaryScoreRepresentationIndex", () => {
    it("gives the correct index for the power-of-two-based score", () => {
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<AnalyzedEvent>, 4)).toBe(0)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<AnalyzedEvent>, 3)).toBe(1)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<AnalyzedEvent>, 2)).toBe(2)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<AnalyzedEvent>, 1)).toBe(3)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<AnalyzedEvent>, 0)).toBe(4)

        expect(computeBinaryScoreRepresentationIndex(1 as Integer & Rank<AnalyzedEvent>, 4)).toBe(5)
        expect(computeBinaryScoreRepresentationIndex(1 as Integer & Rank<AnalyzedEvent>, 3)).toBe(6)
        expect(computeBinaryScoreRepresentationIndex(1 as Integer & Rank<AnalyzedEvent>, 2)).toBe(7)
        expect(computeBinaryScoreRepresentationIndex(1 as Integer & Rank<AnalyzedEvent>, 1)).toBe(8)
        expect(computeBinaryScoreRepresentationIndex(1 as Integer & Rank<AnalyzedEvent>, 0)).toBe(9)

        expect(computeBinaryScoreRepresentationIndex(2 as Integer & Rank<AnalyzedEvent>, 4)).toBe(10)
        expect(computeBinaryScoreRepresentationIndex(2 as Integer & Rank<AnalyzedEvent>, 3)).toBe(11)
        expect(computeBinaryScoreRepresentationIndex(2 as Integer & Rank<AnalyzedEvent>, 2)).toBe(12)
        expect(computeBinaryScoreRepresentationIndex(2 as Integer & Rank<AnalyzedEvent>, 1)).toBe(13)
        expect(computeBinaryScoreRepresentationIndex(2 as Integer & Rank<AnalyzedEvent>, 0)).toBe(14)
    })
})
