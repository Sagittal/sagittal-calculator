import { Level } from "../../../../../../../src/sagittal/notations/ji"
import { formatLevelAnalysis } from "../../../../../../../src/scripts/bound/io/terminal/level/levelAnalysis"

describe("formatLevelAnalysis", (): void => {
    it("gives an explanation per level of what bounds have what ranks there -- both purely within the level, and though all levels up to that point", (): void => {
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
