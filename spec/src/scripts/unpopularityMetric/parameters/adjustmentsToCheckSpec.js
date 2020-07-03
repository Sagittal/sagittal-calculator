const {computeAdjustmentsToCheck} = require("../../../../../src/scripts/unpopularityMetric/parameters/adjustmentsToCheck")
const {ADJUSTMENT} = require("../../../../../src/scripts/unpopularityMetric/parameters/constants")

describe("computeAdjustmentsToCheck", () => {
    it("given centers, ranges, and counts for each adjustment sample, returns an array of all the possible adjustments to check", () => {
        const adjustmentSampleBlockOptions = {
            [ADJUSTMENT.A]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [ADJUSTMENT.W]: {
                center: 0.7,
                range: 0.2,
                count: 3,
            }
        }

        const result = computeAdjustmentsToCheck(adjustmentSampleBlockOptions)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ADJUSTMENT.A]: 0.75, [ADJUSTMENT.W]: 0.6 },
            { [ADJUSTMENT.A]: 0.875, [ADJUSTMENT.W]: 0.6 },
            { [ADJUSTMENT.A]: 1.0, [ADJUSTMENT.W]: 0.6 },
            { [ADJUSTMENT.A]: 1.125, [ADJUSTMENT.W]: 0.6 },
            { [ADJUSTMENT.A]: 1.25, [ADJUSTMENT.W]: 0.6 },
            { [ADJUSTMENT.A]: 0.75, [ADJUSTMENT.W]: 0.7 },
            { [ADJUSTMENT.A]: 0.875, [ADJUSTMENT.W]: 0.7 },
            { [ADJUSTMENT.A]: 1.0, [ADJUSTMENT.W]: 0.7 },
            { [ADJUSTMENT.A]: 1.125, [ADJUSTMENT.W]: 0.7 },
            { [ADJUSTMENT.A]: 1.25, [ADJUSTMENT.W]: 0.7 },
            { [ADJUSTMENT.A]: 0.75, [ADJUSTMENT.W]: 0.8 },
            { [ADJUSTMENT.A]: 0.875, [ADJUSTMENT.W]: 0.8 },
            { [ADJUSTMENT.A]: 1.0, [ADJUSTMENT.W]: 0.8 },
            { [ADJUSTMENT.A]: 1.125, [ADJUSTMENT.W]: 0.8 },
            { [ADJUSTMENT.A]: 1.25, [ADJUSTMENT.W]: 0.8 },
        ]))
    })

    it("leaves an adjustment out if it has a 0 count", () => {
        const adjustmentSampleBlockOptions = {
            [ADJUSTMENT.A]: {
                center: 1,
                range: 0.5,
                count: 5,
            },
            [ADJUSTMENT.W]: {
                center: 0.7,
                range: 0.2,
                count: 0,
            }
        }

        const result = computeAdjustmentsToCheck(adjustmentSampleBlockOptions)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { [ADJUSTMENT.A]: 0.75 },
            { [ADJUSTMENT.A]: 0.875 },
            { [ADJUSTMENT.A]: 1.0 },
            { [ADJUSTMENT.A]: 1.125 },
            { [ADJUSTMENT.A]: 1.25 },
        ]))
    })
})
