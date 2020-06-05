const {calculateOverriddenHistory} = require("../../../../src/boundsAnalysis/calculateHistories/calculateOverriddenHistory")

describe("calculateOverriddenHistorySpec", () => {
    it("returns a new history with only a single event: an override of the previous level", () => {
        const bound = {
            position: 45,
            levels: ["medium", "veryHigh"],
        }
        const level = "veryHigh"

        const result = calculateOverriddenHistory(bound, level)

        expect(result).toEqual({
            position: 45,
            rank: 7,
            events: [
                {
                    level: "medium",
                    type: "override",
                    name: "override",
                    position: 45,
                    rank: 7,
                },
            ],
        })
    })
})
