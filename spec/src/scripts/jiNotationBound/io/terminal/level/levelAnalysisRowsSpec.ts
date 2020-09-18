import { Count } from "../../../../../../../src/general"
import { Rank } from "../../../../../../../src/general/code"
import { Row } from "../../../../../../../src/general/io/table"
import { Integer } from "../../../../../../../src/general/math"
import { JiNotationLevel } from "../../../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../../../src/scripts/jiNotationBound/globals"
import { EventType } from "../../../../../../../src/scripts/jiNotationBound/histories"
import { computeJiNotationLevelAnalysisRows } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level/levelAnalysisRows"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"

describe("computeJiNotationLevelAnalysisRows", (): void => {
    it("returns a row with the ranks for each event type in this level", (): void => {
        const jiNotationLevel = JiNotationLevel.ULTRA

        jiNotationLevelsBestHistoryRanks[ jiNotationLevel ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 18 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 23 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 13 as Count<Integer & Rank<EventType>>,
        }
        jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ] = {
            [ RANKS[ EventType.INA_MIDPOINT ] ]: 18 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.COMMA_MEAN ] ]: 17 as Count<Integer & Rank<EventType>>,
            [ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ]: 15 as Count<Integer & Rank<EventType>>,
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
