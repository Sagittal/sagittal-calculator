import {extractLevelInaDistances} from "../../../../../src/scripts/analyzeBounds/present/levelInaDistances"

describe("extractLevelInaDistances", () => {
    it("returns an array of the ina-distances of each event (from the previous event)", () => {
        const analyzedHistory = {
            events: [
                {level: "MEDIUM", inaDistance: 0.00000},
                {level: "HIGH", inaDistance: 4.44444444},
                {level: "ULTRA", inaDistance: 3.33333333},
                {level: "EXTREME", inaDistance: 2.222222},
                {level: "INSANE", inaDistance: 1.111111},
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
        const analyzedHistory = {
            events: [
                {level: "MEDIUM", inaDistance: 0.00000},
                {level: "HIGH", inaDistance: 4.44444444},
                {level: "EXTREME", inaDistance: 2.222222},
                {level: "INSANE", inaDistance: 1.111111},
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
