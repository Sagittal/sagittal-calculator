import { JiNotationLevel } from "../../../../../../../src/sagittal/notations/ji"
import { formatJiNotationLevelAnalysis } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/level/levelAnalysis"

describe("formatJiNotationLevelAnalysis", (): void => {
    it("gives an explanation per JI notation level of what JI notation bounds have what ranks there -- both purely within the level, and though all levels up to that point", (): void => {
        const jiNotationLevel = JiNotationLevel.ULTRA
        const jiNotationLevelBestHistoryRanks = [18, 23, 13]
        const jiNotationLevelBestCumulativeHistoryRanks = [18, 17, 15]

        const actual = formatJiNotationLevelAnalysis(
            jiNotationLevel,
            jiNotationLevelBestHistoryRanks,
            jiNotationLevelBestCumulativeHistoryRanks,
        )

        const expected = [
            "Ultra            \there\tcmltv",
            "ina midpoint       \t 18\t 18"[ "blue" ],
            "comma mean         \t 23\t 17"[ "cyan" ],
            "size category bound\t 13\t 15"[ "green" ],
        ].join("\n")
        expect(actual).toBe(expected)
    })
})
