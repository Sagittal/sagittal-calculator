import { Count, Decimal } from "../../../../../../../src/general"
import { Rank } from "../../../../../../../src/general/code"
import { Row } from "../../../../../../../src/general/io/table"
import { BoundType, JiNotationLevel } from "../../../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBound/globals"
import { computeJiNotationLevelAnalysisRows } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level/levelAnalysisRows"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"

describe("computeJiNotationLevelAnalysisRows", (): void => {
    it("returns a row with the ranks for each bound type in this level", (): void => {
        const jiNotationLevel = JiNotationLevel.ULTRA

        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ] = {
            [ RANKS[ BoundType.INA_MIDPOINT ] ]: 18 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
            [ RANKS[ BoundType.COMMA_MEAN ] ]: 23 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
            [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: 13 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ] = {
            [ RANKS[ BoundType.INA_MIDPOINT ] ]: 18 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
            [ RANKS[ BoundType.COMMA_MEAN ] ]: 17 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
            [ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ]: 15 as Count<Decimal<{ integer: true }> & Rank<BoundType>>,
        }

        const actual = computeJiNotationLevelAnalysisRows(jiNotationLevel)

        const expected = [
            ["ina midpoint", " 18    ", " 18    "],
            ["comma mean", " 23    ", " 17    "],
            ["size category bound", " 13    ", " 15    "],
        ] as Array<Row<{ of: JiNotationLevel }>>
        expect(actual).toEqual(expected)
    })
})
