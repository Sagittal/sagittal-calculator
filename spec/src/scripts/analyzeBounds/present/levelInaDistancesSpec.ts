import { extractLevelInaDistances } from "../../../../../src/scripts/analyzeBounds/present/levelInaDistances"
import { Level } from "../../../../../src/notations/ji/types"
import { AnalyzedEvent, AnalyzedHistory } from "../../../../../src/scripts/analyzeBounds/types"

describe("extractLevelInaDistances", () => {
    it("returns an array of the ina-distances of each event (from the previous event)", () => {
        const analyzedHistory = {
            events: [
                { level: Level.MEDIUM, inaDistance: 0.00000 },
                { level: Level.HIGH, inaDistance: 4.44444444 },
                { level: Level.ULTRA, inaDistance: 3.33333333 },
                { level: Level.EXTREME, inaDistance: 2.222222 },
                { level: Level.INSANE, inaDistance: 1.111111 },
            ] as AnalyzedEvent[],
        } as AnalyzedHistory

        const result = extractLevelInaDistances(analyzedHistory)

        expect(result).toEqual([
            "  4.444",
            "  3.333",
            "  2.222",
            "  1.111",
        ])
    })

    it("works when a level is skipped", () => {
        const analyzedHistory: AnalyzedHistory = {
            events: [
                { level: Level.MEDIUM, inaDistance: 0.00000 },
                { level: Level.HIGH, inaDistance: 4.44444444 },
                { level: Level.EXTREME, inaDistance: 2.222222 },
                { level: Level.INSANE, inaDistance: 1.111111 },
            ] as AnalyzedEvent[],
        } as AnalyzedHistory

        const result = extractLevelInaDistances(analyzedHistory)

        expect(result).toEqual([
            "  4.444",
            "  2.222",
            " ",
            "  1.111",
        ])
    })
})
