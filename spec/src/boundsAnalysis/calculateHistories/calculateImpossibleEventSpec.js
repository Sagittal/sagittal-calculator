const {calculateImpossibleEvent} = require("../../../../src/boundsAnalysis/calculateHistories/calculateImpossibleEvent")

describe("calculateImpossibleEvent", () => {
    it("returns an event stating that the history became impossible for this position at this level", () => {
        const result = calculateImpossibleEvent(67, "VeryHigh")

        expect(result).toEqual({
            level: "VeryHigh",
            type: "impossible",
            name: "impossible",
            position: 67,
        })
    })
})
