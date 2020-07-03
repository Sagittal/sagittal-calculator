const {computeAdjustmentsToCheck} = require("../../../../../src/scripts/notationalCommaPopularityMetric/parameters/adjustmentsToCheck")

describe("computeAdjustmentsToCheck", () => {
    it("given centers, ranges, and counts for each adjustment sample, returns an array of all the possible adjustments to check", () => {
        const adjustmentSampleBlockOptions = {
            a: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            b: {
                center: 0.7,
                range: 0.2,
                count: 3,
            }
        }

        const result = computeAdjustmentsToCheck(adjustmentSampleBlockOptions)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { a: 0.75, b: 0.6 },
            { a: 0.875, b: 0.6 },
            { a: 1.0, b: 0.6 },
            { a: 1.125, b: 0.6 },
            { a: 1.25, b: 0.6 },
            { a: 0.75, b: 0.7 },
            { a: 0.875, b: 0.7 },
            { a: 1.0, b: 0.7 },
            { a: 1.125, b: 0.7 },
            { a: 1.25, b: 0.7 },
            { a: 0.75, b: 0.8 },
            { a: 0.875, b: 0.8 },
            { a: 1.0, b: 0.8 },
            { a: 1.125, b: 0.8 },
            { a: 1.25, b: 0.8 },
        ]))
    })

    it("leaves an adjustment out if it has a 0 count", () => {
        const adjustmentSampleBlockOptions = {
            a: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            b: {
                center: 0.7,
                range: 0.2,
                count: 0,
            }
        }

        const result = computeAdjustmentsToCheck(adjustmentSampleBlockOptions)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { a: 0.75 },
            { a: 0.875 },
            { a: 1.0 },
            { a: 1.125 },
            { a: 1.25 },
        ]))
    })
})
