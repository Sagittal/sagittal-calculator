const {computeCombinedSubmetricAdjustments} = require("../../../../../src/scripts/unpopularityMetric/parameters/combinedSubmetricAdjustments")
const {SUBMETRIC_NAME, ADJUSTMENT} = require("../../../../../src/scripts/unpopularityMetric/parameters/constants")

describe("computeCombinedSubmetricAdjustments", () => {
    it("takes the adjustments for each submetric and returns every possible combination of them", () => {
        const submetricAdjustments = {
            [SUBMETRIC_NAME.SOAPFAR]: [
                {[ADJUSTMENT.A]: 0.5, [ADJUSTMENT.Y]: 1.5},
                {[ADJUSTMENT.A]: 0.5, [ADJUSTMENT.Y]: 1.2},
            ],
            [SUBMETRIC_NAME.SOAPF]: [
                {[ADJUSTMENT.A]: 0.7, [ADJUSTMENT.Y]: 0.9},
                {[ADJUSTMENT.A]: 0.7, [ADJUSTMENT.Y]: 1.1},
            ],
        }

        const result = computeCombinedSubmetricAdjustments(submetricAdjustments)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                [SUBMETRIC_NAME.SOAPFAR]: {[ADJUSTMENT.A]: 0.5, [ADJUSTMENT.Y]: 1.5},
                [SUBMETRIC_NAME.SOAPF]: {[ADJUSTMENT.A]: 0.7, [ADJUSTMENT.Y]: 0.9},
            },
            {
                [SUBMETRIC_NAME.SOAPFAR]: {[ADJUSTMENT.A]: 0.5, [ADJUSTMENT.Y]: 1.5},
                [SUBMETRIC_NAME.SOAPF]: {[ADJUSTMENT.A]: 0.7, [ADJUSTMENT.Y]: 1.1},
            },
            {
                [SUBMETRIC_NAME.SOAPFAR]: {[ADJUSTMENT.A]: 0.5, [ADJUSTMENT.Y]: 1.2},
                [SUBMETRIC_NAME.SOAPF]: {[ADJUSTMENT.A]: 0.7, [ADJUSTMENT.Y]: 0.9},
            },
            {
                [SUBMETRIC_NAME.SOAPFAR]: {[ADJUSTMENT.A]: 0.5, [ADJUSTMENT.Y]: 1.2},
                [SUBMETRIC_NAME.SOAPF]: {[ADJUSTMENT.A]: 0.7, [ADJUSTMENT.Y]: 1.1},
            },
        ]))
    })
})
