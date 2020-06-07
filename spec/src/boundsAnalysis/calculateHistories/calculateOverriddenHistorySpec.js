const {calculateOverriddenHistory} = require("../../../../src/boundsAnalysis/calculateHistories/calculateOverriddenHistory")

describe("calculateOverriddenHistorySpec", () => {
    it("returns a new history with only a single event: an override of the previous level", () => {
        const bound = {
            position: 45,
            levels: ["MEDIUM", "VERY_HIGH"],
        }
        const level = "VERY_HIGH"

        // so what it's going to do is
        // take that 45 position (which is the final actual position of the bound)
        // and level "VERY_HIGH" (where we are at now, where we just found all of the events we could find were outside the two commas bounded by position 45 at that level, which are '//| (44.9696465023956) and )//| (46.3939444429262))
        // and ask for a new initial position
        // and that initial position will be
        // the mean of the bounded commas of that position at that level
        // so at the Very High level
        // the two commas bounded by position 45, again, are '//| (44.9696465023956) and )//| (46.3939444429262)
        // so the mean is 45.681795472660895
        // but then it's going to place that event at the Medium level
        // so that when it tried again to calculate events at the Very High level
        // it will find the event which is that comma mean at the Very High level, yes,
        // but potentially also EDA events and size category bound events too

        const result = calculateOverriddenHistory(bound, level)

        expect(result).toEqual([
            {
                level: "MEDIUM",
                type: "OVERRIDE",
                name: "overridden to stay within '//| and )//| at the VERY_HIGH level", // TODO: so to really help drive this home we need to name this thing accordingly
                position: 45.681795472660895,
            },
        ])
    })
})
