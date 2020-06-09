const {analyzeEvents} = require("../../../../src/boundsAnalysis/analyze/events")

describe("analyzeEvents", () => {
    it("adds a rank to each event", () => {
        const history = [
            {
                type: "EDA",
                level: "HIGH",
                position: 10.0,
            },
            {
                type: "SIZE",
                level: "VERY_HIGH",
                position: 10.2,
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 10.1,
            },
        ]

        const result = analyzeEvents(history)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                type: "EDA",
                level: "HIGH",
                position: 10.0,
                rank: 1,
            },
            {
                type: "SIZE",
                level: "VERY_HIGH",
                position: 10.2,
                rank: 3,
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 10.1,
                rank: 2,
            },
        ]))
    })

    it("works when an event is more than a half-step of the EDA at that level away from the previous step, giving it a lower rank", () => {
        const history = [
            {
                type: "EDA",
                level: "HIGH",
                position: 10.0,
            },
            {
                type: "SIZE",
                level: "VERY_HIGH",
                position: 8.9, // off by the previous position by a lot
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 9.0,
            },
        ]

        const result = analyzeEvents(history)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                type: "EDA",
                level: "HIGH",
                position: 10.0,
                rank: 1,
            },
            {
                type: "SIZE",
                level: "VERY_HIGH",
                position: 8.9,
                rank: 6,
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 9.0,
                rank: 2,
            },
        ]))
    })
})
