const {formatLevelSummary} = require("../../../../src/boundsAnalysis/format/formatLevelSummary")

describe("formatLevelSummary", () => {
    it("gives an explanation per level of what bounds have what ranks there", () => {
        const level = "VERY_HIGH"
        const levelBestHistoryRanks = { 1: 18, 2: 23, 3: 1, 7: 13 }

        const result = formatLevelSummary(level, levelBestHistoryRanks)

        expect(result).toBe([
            "Very High",
            " 18 EDA midpoint".brightBlue,
            " 23 comma mean".cyan,
            "  1 size category bound".green,
            " 13 override".red,
        ].join("\n"))
    })
})
