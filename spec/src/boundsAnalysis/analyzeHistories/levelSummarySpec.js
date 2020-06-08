const {updateLevelSummary, levelsBestHistoryRanks} = require("../../../../src/boundsAnalysis/analyzeHistories/levelSummary")

describe("levelSummary", () => {
    it("initializes a rank at a level when it doesn't exist yet", () => {
        const bestPossibleHistory = {
            events: [
                {level: "MEDIUM", rank: "EDA"},
            ],
        }
        if ("MEDIUM" in levelsBestHistoryRanks) delete levelsBestHistoryRanks["MEDIUM"]
        expect(levelsBestHistoryRanks["MEDIUM"]).toBeUndefined()

        updateLevelSummary(bestPossibleHistory)

        expect(levelsBestHistoryRanks["MEDIUM"]["EDA"]).toBe(1)
    })

    it("increments ranks at levels when they exists", () => {
        const bestPossibleHistory = {
            events: [
                {level: "MEDIUM", rank: "EDA"},
                {level: "HIGH", rank: "MEAN"},
            ],
        }
        let formerMediumEda = 3
        let formerHighMean = 4
        levelsBestHistoryRanks["MEDIUM"] = {EDA: formerMediumEda}
        levelsBestHistoryRanks["HIGH"] = {MEAN: formerHighMean}

        updateLevelSummary(bestPossibleHistory)

        expect(levelsBestHistoryRanks["MEDIUM"]["EDA"]).toBe(formerMediumEda + 1)
        expect(levelsBestHistoryRanks["HIGH"]["MEAN"]).toBe(formerHighMean + 1)
    })
})
