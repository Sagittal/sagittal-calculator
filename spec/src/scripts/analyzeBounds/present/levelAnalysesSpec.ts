import { presentLevelAnalyses } from "../../../../../src/scripts/analyzeBounds/present/levelAnalyses"
import { LEVELS } from "../../../../../src/notations/ji/levels"
import {
    levelsBestCumulativeHistoryRanks,
    levelsBestHistoryRanks,
} from "../../../../../src/scripts/analyzeBounds/levels"
import { Level } from "../../../../../src/notations/ji/types"

describe("presentLevelAnalyses", () => {
    beforeEach(() => {
        levelsBestHistoryRanks[ Level.MEDIUM ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        levelsBestHistoryRanks[ Level.HIGH ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        levelsBestHistoryRanks[ Level.ULTRA ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        levelsBestHistoryRanks[ Level.EXTREME ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        levelsBestHistoryRanks[ Level.INSANE ] = { 1: 18, 2: 23, 3: 1, 7: 13 }
        levelsBestCumulativeHistoryRanks[ Level.MEDIUM ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        levelsBestCumulativeHistoryRanks[ Level.HIGH ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        levelsBestCumulativeHistoryRanks[ Level.ULTRA ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        levelsBestCumulativeHistoryRanks[ Level.EXTREME ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
        levelsBestCumulativeHistoryRanks[ Level.INSANE ] = { 1: 16, 2: 23, 3: 1, 7: 13 }
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
