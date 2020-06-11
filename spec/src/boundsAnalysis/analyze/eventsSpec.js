const {analyzeEvents} = require("../../../../src/boundsAnalysis/analyze/events")

describe("analyzeEvents", () => {
    it("adds a rank and exact property to each event", () => {
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
        const actualBoundPosition = 10.2

        const result = analyzeEvents(history, actualBoundPosition)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                type: "EDA",
                level: "HIGH",
                position: 10.0,
                rank: 1,
                exact: false,
            },
            {
                type: "SIZE",
                level: "VERY_HIGH",
                position: 10.2,
                rank: 3,
                exact: true,
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 10.1,
                rank: 2,
                exact: false,
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
        const actualBoundPosition = 9.5

        const result = analyzeEvents(history, actualBoundPosition)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                type: "EDA",
                level: "HIGH",
                position: 10.0,
                rank: 1,
                exact: false,
            },
            {
                type: "SIZE",
                level: "VERY_HIGH",
                position: 8.9,
                rank: 3,
                exact: false,
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 9.0,
                rank: 2,
                exact: false,
            },
        ]))
    })
})
