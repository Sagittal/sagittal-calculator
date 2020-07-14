import { Proportion } from "../../../../../src/general"
import { Level } from "../../../../../src/notations/ji"
import { extractLevelInaDistances } from "../../../../../src/scripts/analyzeBounds/present/levelInaDistances"
import { AnalyzedHistory } from "../../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture, analyzedHistoryFixture } from "../../../../helpers/scripts/analyzeBounds/fixtures"

describe("extractLevelInaDistances", () => {
    it("returns an array of the ina-distances of each event (from the previous event)", () => {
        const analyzedHistory: AnalyzedHistory = {
            ...analyzedHistoryFixture,
            events: [
                { ...analyzedEventFixture, level: Level.MEDIUM, inaDistance: 0.00000 as Proportion },
                { ...analyzedEventFixture, level: Level.HIGH, inaDistance: 4.44444444 as Proportion },
                { ...analyzedEventFixture, level: Level.ULTRA, inaDistance: 3.33333333 as Proportion },
                { ...analyzedEventFixture, level: Level.EXTREME, inaDistance: 2.222222 as Proportion },
                { ...analyzedEventFixture, level: Level.INSANE, inaDistance: 1.111111 as Proportion },
            ],
        }

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
            ...analyzedHistoryFixture,
            events: [
                { ...analyzedEventFixture, level: Level.MEDIUM, inaDistance: 0.00000 as Proportion },
                { ...analyzedEventFixture, level: Level.HIGH, inaDistance: 4.44444444 as Proportion },
                { ...analyzedEventFixture, level: Level.EXTREME, inaDistance: 2.222222 as Proportion },
                { ...analyzedEventFixture, level: Level.INSANE, inaDistance: 1.111111 as Proportion },
            ],
        }

        const result = extractLevelInaDistances(analyzedHistory)

        expect(result).toEqual([
            "  4.444",
            "  2.222",
            " ",
            "  1.111",
        ])
    })
})
