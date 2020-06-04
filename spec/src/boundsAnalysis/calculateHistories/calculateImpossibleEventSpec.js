const {calculateImpossibleEvent} = require("../../../../src/boundsAnalysis/calculateHistories/calculateImpossibleEvent")

describe("calculateImpossibleEvent", () => {
    it("returns an event stating that the history became impossible for this position at this level", () => {
        const result = calculateImpossibleEvent(57.49997795411970, "VeryHigh", [58.03562587367890, 59.57953862346640])

        expect(result).toEqual({
            level: "VeryHigh",
            type: "impossible",
            name: "not between ,.(|) @58.036 and `|\\) @59.580 at the VeryHigh level",
            position: 57.4999779541197,
        })
    })

    it("formats correctly when the upper bound undefined (representing the maximum position)", () => {
        const result = calculateImpossibleEvent(57.49997795411970, "VeryHigh", [58.03562587367890, undefined])

        expect(result).toEqual({
            level: "VeryHigh",
            type: "impossible",
            name: "not between ,.(|) @58.036 and the maximum position @68.573 at the VeryHigh level",
            position: 57.4999779541197,
        })
    })
})
