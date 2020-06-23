const {computeExact} = require("../../../../src/boundsAnalysis/analyze/exact")

describe("computeExact", () => {
    it("returns true if every event's position is the same as the actual bound position", () => {
        const analyzedEvents = [
            {exact: true},
            {exact: true},
            {exact: true},
            {exact: true},
        ]

        const result = computeExact(analyzedEvents)

        expect(result).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", () => {
        const analyzedEvents = [
            {exact: true},
            {exact: false},
            {exact: true},
            {exact: true},
        ]

        const result = computeExact(analyzedEvents)

        expect(result).toBeFalsy()
    })
})
