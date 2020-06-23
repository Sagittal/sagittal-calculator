const {extractLevelDistances} = require("../../../../../src/scripts/analyzeBounds/present/levelDistances")

describe("extractLevelDistances", () => {
    it("returns an array of the distances of each event (from the previous event)", () => {
        const analyzedHistory = {
            events: [
                {level: "MEDIUM", distance: 0.00000},
                {level: "HIGH", distance: 4.44444444},
                {level: "ULTRA", distance: 3.33333333},
                {level: "EXTREME", distance: 2.222222},
                {level: "INSANE", distance: 1.111111},
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
            events: [
                {level: "MEDIUM", distance: 0.00000},
                {level: "HIGH", distance: 4.44444444},
                {level: "EXTREME", distance: 2.222222},
                {level: "INSANE", distance: 1.111111},
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
