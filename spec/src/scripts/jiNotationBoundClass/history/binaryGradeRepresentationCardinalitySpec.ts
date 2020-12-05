import {Decimal, Rank} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {computeBinaryGradeRepresentationIndex} from "../../../../../src/scripts/jiNotationBoundClass/history/binaryGradeRepresentationCardinality"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"

describe("computeBinaryGradeRepresentationIndex", (): void => {
    it("gives the correct index for the power-of-two-based grade", (): void => {
        expect(computeBinaryGradeRepresentationIndex(0 as Decimal<{integer: true}> & Rank<BoundType>, 4)).toBe(0)
        expect(computeBinaryGradeRepresentationIndex(0 as Decimal<{integer: true}> & Rank<BoundType>, 3)).toBe(1)
        expect(computeBinaryGradeRepresentationIndex(0 as Decimal<{integer: true}> & Rank<BoundType>, 2)).toBe(2)
        expect(computeBinaryGradeRepresentationIndex(0 as Decimal<{integer: true}> & Rank<BoundType>, 1)).toBe(3)
        expect(computeBinaryGradeRepresentationIndex(0 as Decimal<{integer: true}> & Rank<BoundType>, 0)).toBe(4)

        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.INA_MIDPOINT], 4)).toBe(5)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.INA_MIDPOINT], 3)).toBe(6)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.INA_MIDPOINT], 2)).toBe(7)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.INA_MIDPOINT], 1)).toBe(8)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.INA_MIDPOINT], 0)).toBe(9)

        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.COMMA_MEAN], 4)).toBe(10)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.COMMA_MEAN], 3)).toBe(11)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.COMMA_MEAN], 2)).toBe(12)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.COMMA_MEAN], 1)).toBe(13)
        expect(computeBinaryGradeRepresentationIndex(RANKS[BoundType.COMMA_MEAN], 0)).toBe(14)
    })
})
