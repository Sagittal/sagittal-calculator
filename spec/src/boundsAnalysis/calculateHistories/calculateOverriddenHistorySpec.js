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
            position: 45.681795472660895,
            rank: 7,
            events: [
                {
                    level: "medium",
                    type: "override",
                    name: "override",
                    position: 45.681795472660895, // mean of '//| (44.9696465023956) and )//| (46.3939444429262) at veryHigh level is
                    rank: 7,
                },
            ],
        })
    })
})
