const {updateLevelAnalysis, levelsBestHistoryRanks} = require("../../../../src/boundsAnalysis/analyze/levels")

describe("updateLevelAnalysis", () => {
    it("initializes a rank at a level when it doesn't exist yet", () => {
        const bestPossibleHistory = {
            events: [
                {level: "MEDIUM", rank: 0},
            ],
        }
        if ("MEDIUM" in levelsBestHistoryRanks) delete levelsBestHistoryRanks["MEDIUM"]
        expect(levelsBestHistoryRanks["MEDIUM"]).toBeUndefined()

        updateLevelAnalysis(bestPossibleHistory)

        expect(levelsBestHistoryRanks["MEDIUM"][0]).toBe(1)
    })

    it("increments ranks at levels when they exists", () => {
        const bestPossibleHistory = {
            events: [
                {level: "MEDIUM", rank: 0},
                {level: "HIGH", rank: 1},
            ],
        }
        let formerMediumEda = 3
        let formerHighMean = 4
        levelsBestHistoryRanks["MEDIUM"] = [formerMediumEda]
        levelsBestHistoryRanks["HIGH"] = [undefined, formerHighMean]

        updateLevelAnalysis(bestPossibleHistory)

        expect(levelsBestHistoryRanks["MEDIUM"][0]).toBe(formerMediumEda + 1)
        expect(levelsBestHistoryRanks["HIGH"][1]).toBe(formerHighMean + 1)
    })
})
