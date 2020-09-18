import { Count, NEWLINE } from "../../../../../../../src/general"
import { Maybe, Rank } from "../../../../../../../src/general/code"
import { Integer } from "../../../../../../../src/general/math"
import { JiNotationLevel } from "../../../../../../../src/sagittal/notations/ji"
import { EventAnalysis } from "../../../../../../../src/scripts/jiNotationBound/history/events"
import { formatJiNotationLevelAnalysis } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level/levelAnalysis"

describe("formatJiNotationLevelAnalysis", (): void => {
    it("gives an explanation per JI notation level of what JI notation bounds have what ranks there -- both purely within the level, and though all levels up to that point", (): void => {
        const jiNotationLevel = JiNotationLevel.ULTRA
        const jiNotationLevelBestHistoryRanks = [
            18, 23, 13
        ] as Record<number, number> as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
        const jiNotationLevelBestCumulativeHistoryRanks = [
            18, 17, 15
        ] as Record<number, number> as Record<number, Count<Integer & Rank<EventAnalysis>>>

        const actual = formatJiNotationLevelAnalysis(
            jiNotationLevel,
            jiNotationLevelBestHistoryRanks,
            jiNotationLevelBestCumulativeHistoryRanks,
        )

        const expected = [
            "Ultra              \there   \tcumulative".underline,
            "ina midpoint       \t 18    \t 18       ".blue,
            "comma mean         \t 23    \t 17       ".cyan,
            "size category bound\t 13    \t 15       ".green,
        ].join(NEWLINE) + NEWLINE
        expect(actual).toBe(expected)
    })
})
