const {presentLevelAnalyses} = require("../../../../src/boundsAnalysis/present/levelAnalyses")
const {LEVELS} = require("../../../../src/boundsAnalysis/data/levels")
const {levelsBestHistoryRanks} = require("../../../../src/boundsAnalysis/analyze/levels")

describe("presentLevelAnalyses", () => {
    beforeEach(() => {
        levelsBestHistoryRanks["MEDIUM"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["HIGH"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["VERY_HIGH"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["EXTREME"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["INSANE"] = {1: 18, 2: 23, 3: 1, 7: 13}
    })

    it("does not mutate LEVELS", () => {
        const formerLevels = LEVELS.slice()

        presentLevelAnalyses()

        expect(formerLevels).toEqual(LEVELS)
    })

    it("prints the levels in order from highest to lowest", () => {
        const result = presentLevelAnalyses()

        expect(result.indexOf("Insane")).toBeLessThan(result.indexOf("Extreme"))
        expect(result.indexOf("Extreme")).toBeLessThan(result.indexOf("Very High"))
        expect(result.indexOf("Very High")).toBeLessThan(result.indexOf("High"))
        expect(result.indexOf("High")).toBeLessThan(result.indexOf("Medium"))
    })
})
