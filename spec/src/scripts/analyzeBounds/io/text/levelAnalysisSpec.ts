import { Level } from "../../../../../../src/notations/ji"
import { formatLevelAnalysis } from "../../../../../../src/scripts/analyzeBounds/io/text/levelAnalysis"

describe("formatLevelAnalysis", () => {
    it("gives an explanation per level of what bounds have what ranks there -- both purely within the level, and though all levels up to that point", () => {
        const level = Level.ULTRA
        const levelBestHistoryRanks = [18, 23, 13]
        const levelBestCumulativeHistoryRanks = [18, 17, 15]

        const actual = formatLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks)

        const expected = [
            "Ultra            \there\tcmltv",
            "ina midpoint       \t 18\t 18"[ "blue" ],
            "comma mean         \t 23\t 17"[ "cyan" ],
            "size category bound\t 13\t 15"[ "green" ],
        ].join("\n")
        expect(actual).toBe(expected)
    })
})
