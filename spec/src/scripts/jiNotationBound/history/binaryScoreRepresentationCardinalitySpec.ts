import { Integer, Rank } from "../../../../../src/general"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeBinaryScoreRepresentationIndex } from "../../../../../src/scripts/jiNotationBound/history/binaryScoreRepresentationCardinality"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

describe("computeBinaryScoreRepresentationIndex", (): void => {
    it("gives the correct index for the power-of-two-based score", (): void => {
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<EventType>, 4)).toBe(0)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<EventType>, 3)).toBe(1)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<EventType>, 2)).toBe(2)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<EventType>, 1)).toBe(3)
        expect(computeBinaryScoreRepresentationIndex(0 as Integer & Rank<EventType>, 0)).toBe(4)

        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.INA_MIDPOINT ], 4)).toBe(5)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.INA_MIDPOINT ], 3)).toBe(6)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.INA_MIDPOINT ], 2)).toBe(7)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.INA_MIDPOINT ], 1)).toBe(8)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.INA_MIDPOINT ], 0)).toBe(9)

        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.COMMA_MEAN ], 4)).toBe(10)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.COMMA_MEAN ], 3)).toBe(11)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.COMMA_MEAN ], 2)).toBe(12)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.COMMA_MEAN ], 1)).toBe(13)
        expect(computeBinaryScoreRepresentationIndex(RANKS[ EventType.COMMA_MEAN ], 0)).toBe(14)
    })
})
