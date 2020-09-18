import { Count } from "../../../../../../../src/general"
import { Maybe, Rank } from "../../../../../../../src/general/code"
import { Row } from "../../../../../../../src/general/io/table"
import { Integer } from "../../../../../../../src/general/math"
import { JiNotationLevel } from "../../../../../../../src/sagittal/notations/ji"
import { EventAnalysis } from "../../../../../../../src/scripts/jiNotationBound/history/events"
import { computeLevelAnalysisRows } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level/levelAnalysisRows"

describe("computeLevelAnalysisRows", (): void => {
    it("returns a row with the ranks for each event type in this level", (): void => {
        const jiNotationLevelBestHistoryRanks = [
            18, 23, 13
        ] as Record<number, number> as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
        const jiNotationLevelBestCumulativeHistoryRanks = [
            18, 17, 15
        ] as Record<number, number> as Record<number, Count<Integer & Rank<EventAnalysis>>>

        const actual = computeLevelAnalysisRows(
            jiNotationLevelBestHistoryRanks,
            jiNotationLevelBestCumulativeHistoryRanks,
        )

        const expected = [
            ["ina midpoint", " 18    ", " 18    "],
            ["comma mean", " 23    ", " 17    "],
            ["size category bound", " 13    ", " 15    "],
        ] as Array<Row<{ of: JiNotationLevel }>>
        expect(actual).toEqual(expected)
    })
})
