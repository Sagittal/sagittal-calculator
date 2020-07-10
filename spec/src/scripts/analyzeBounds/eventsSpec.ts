import {analyzeEvents} from "../../../../src/scripts/analyzeBounds/events"

describe("analyzeEvents", () => {
    it("adds some analysis properties to each event: rank, distance, and exact", () => {
        const history = [
            {
                type: "INA",
                level: "HIGH",
                position: 10.0,
            },
            {
                type: "SIZE",
                level: "ULTRA",
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
                type: "INA",
                level: "HIGH",
                position: 10.0,
                rank: 0,
                exact: false,
                distance: 0,
                inaDistance: 0,
            },
            {
                type: "SIZE",
                level: "ULTRA",
                position: 10.2,
                rank: 2,
                exact: true,
                distance: 0.1999999999999993,
                inaDistance: 0.10203632301441096,
            },
            {
                type: "MEAN",
                level: "EXTREME",
                position: 10.1,
                rank: 1,
                exact: false,
                distance: 0.09999999999999964,
                inaDistance: 0.20495226950308407,
            },
        ]))
    })
})
