import { shallowClone } from "../../../../../../../src/general/code"
import { Level, LEVELS } from "../../../../../../../src/sagittal/notations/ji"
import {
    levelsBestCumulativeHistoryRanks,
    levelsBestHistoryRanks,
} from "../../../../../../../src/scripts/bound/analyzeBound"
import { formatLevelAnalyses } from "../../../../../../../src/scripts/bound/io/terminal/level"

describe("formatLevelAnalyses", () => {
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
        const formerLevels = shallowClone(LEVELS)

        formatLevelAnalyses()

        expect(formerLevels).toEqual(LEVELS)
    })

    it("prints the levels in order from highest to lowest", () => {
        const actual = formatLevelAnalyses()

        expect(actual.indexOf("Insane")).toBeLessThan(actual.indexOf("Extreme"))
        expect(actual.indexOf("Extreme")).toBeLessThan(actual.indexOf("Ultra"))
        expect(actual.indexOf("Ultra")).toBeLessThan(actual.indexOf("High"))
        expect(actual.indexOf("High")).toBeLessThan(actual.indexOf("Medium"))
    })
})