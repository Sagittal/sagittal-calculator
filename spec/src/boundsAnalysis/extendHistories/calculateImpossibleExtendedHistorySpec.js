const {calculateImpossibleExtendedHistory} = require("../../../../src/boundsAnalysis/extendHistories/calculateImpossibleExtendedHistory")

describe("calculateImpossibleExtendedHistory", () => {
    it("extends the events with an event that this history was determined impossible at this level", () => {
        expect(calculateImpossibleExtendedHistory({events: ["previous events"], position: 67}, "VeryHigh")).toEqual({
            events: ["previous events", "VeryHigh_impossible"],
            position: 67,
        })
    })
})
