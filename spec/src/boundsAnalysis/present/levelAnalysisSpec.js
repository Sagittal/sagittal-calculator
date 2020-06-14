const {presentLevelAnalysis} = require("../../../../src/boundsAnalysis/present/levelAnalysis")

describe("presentLevelAnalysis", () => {
    it("gives an explanation per level of what bounds have what ranks there", () => {
        const level = "ULTRA"
        const levelBestHistoryRanks = [18, 23, 13]

        const result = presentLevelAnalysis(level, levelBestHistoryRanks)

        expect(result).toBe([
            "Ultra",
            " 18 EDA midpoint".brightBlue,
            " 23 comma mean".cyan,
            " 13 size category bound".green,
        ].join("\n"))
    })
})
