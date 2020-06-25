const {presentLevelAnalyses} = require("../../../../../src/scripts/analyzeBounds/present/levelAnalyses")
const {LEVELS} = require("../../../../../src/notations/ji/levels")
const {levelsBestHistoryRanks, levelsBestCumulativeHistoryRanks} = require("../../../../../src/scripts/analyzeBounds/levels")

describe("presentLevelAnalyses", () => {
    beforeEach(() => {
        levelsBestHistoryRanks["MEDIUM"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["HIGH"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["ULTRA"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["EXTREME"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["INSANE"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestCumulativeHistoryRanks["MEDIUM"] = {1: 16, 2: 23, 3: 1, 7: 13}
        levelsBestCumulativeHistoryRanks["HIGH"] = {1: 16, 2: 23, 3: 1, 7: 13}
        levelsBestCumulativeHistoryRanks["ULTRA"] = {1: 16, 2: 23, 3: 1, 7: 13}
        levelsBestCumulativeHistoryRanks["EXTREME"] = {1: 16, 2: 23, 3: 1, 7: 13}
        levelsBestCumulativeHistoryRanks["INSANE"] = {1: 16, 2: 23, 3: 1, 7: 13}
    })

    it("does not mutate LEVELS", () => {
        const formerLevels = LEVELS.slice()

        presentLevelAnalyses()

        expect(formerLevels).toEqual(LEVELS)
    })

    it("prints the levels in order from highest to lowest", () => {
        const result = presentLevelAnalyses()

        expect(result.indexOf("Insane")).toBeLessThan(result.indexOf("Extreme"))
        expect(result.indexOf("Extreme")).toBeLessThan(result.indexOf("Ultra"))
        expect(result.indexOf("Ultra")).toBeLessThan(result.indexOf("High"))
        expect(result.indexOf("High")).toBeLessThan(result.indexOf("Medium"))
    })
})
