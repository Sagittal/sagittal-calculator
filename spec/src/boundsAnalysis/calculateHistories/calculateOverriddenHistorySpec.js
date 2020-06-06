const {calculateOverriddenHistory} = require("../../../../src/boundsAnalysis/calculateHistories/calculateOverriddenHistory")

describe("calculateOverriddenHistorySpec", () => {
    it("returns a new history with only a single event: an override of the previous level", () => {
        const bound = {
            position: 45,
            levels: ["MEDIUM", "VERY_HIGH"],
        }
        const level = "VERY_HIGH"

        const result = calculateOverriddenHistory(bound, level)

        expect(result).toEqual([
            {
                level: "MEDIUM",
                type: "OVERRIDE",
                name: "OVERRIDE",
                position: 45.681795472660895, // mean of '//| (44.9696465023956) and )//| (46.3939444429262) at the very high level
            },
        ])
    })
})
