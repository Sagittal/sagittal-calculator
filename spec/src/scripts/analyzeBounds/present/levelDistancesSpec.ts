import { extractLevelDistances } from "../../../../../src/scripts/analyzeBounds/present/levelDistances"
import { Level } from "../../../../../src/notations/ji/types"
import { AnalyzedHistory } from "../../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../../src/utilities/types"
import { analyzedEventFixture, analyzedHistoryFixture } from "../../../../helpers/scripts/analyzeBounds/fixtures"

describe("extractLevelDistances", () => {
    it("returns an array of the distances of each event (from the previous event)", () => {
        const analyzedHistory: AnalyzedHistory = {
            ...analyzedHistoryFixture,
            events: [
                { ...analyzedEventFixture, level: Level.MEDIUM, distance: 0.00000 as Cents },
                { ...analyzedEventFixture, level: Level.HIGH, distance: 4.44444444 as Cents },
                { ...analyzedEventFixture, level: Level.ULTRA, distance: 3.33333333 as Cents },
                { ...analyzedEventFixture, level: Level.EXTREME, distance: 2.222222 as Cents },
                { ...analyzedEventFixture, level: Level.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const result = extractLevelDistances(analyzedHistory)

        expect(result).toEqual([
            "  4.444",
            "  3.333",
            "  2.222",
            "  1.111",
        ])
    })

    it("works when a level is skipped", () => {
        const analyzedHistory = {
            ...analyzedHistoryFixture,
            events: [
                { ...analyzedEventFixture, level: Level.MEDIUM, distance: 0.00000 as Cents },
                { ...analyzedEventFixture, level: Level.HIGH, distance: 4.44444444 as Cents },
                { ...analyzedEventFixture, level: Level.EXTREME, distance: 2.222222 as Cents },
                { ...analyzedEventFixture, level: Level.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const result = extractLevelDistances(analyzedHistory)

        expect(result).toEqual([
            "  4.444",
            "  2.222",
            " ",
            "  1.111",
        ])
    })
})
