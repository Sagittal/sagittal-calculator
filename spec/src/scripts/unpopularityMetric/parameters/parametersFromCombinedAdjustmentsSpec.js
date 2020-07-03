const {SUBMETRIC_NAME, SUBMETRIC_TYPE, ADJUSTMENT} = require("../../../../../src/scripts/unpopularityMetric/parameters/constants")
const {computeParametersFromCombinedAdjustments} = require("../../../../../src/scripts/unpopularityMetric/parameters/parametersFromCombinedAdjustments")

describe("computeParametersFromCombinedAdjustments", () => {
    it("applies the submetric types to each of the combined adjustments", () => {
        const combinedAdjustments = {
            [SUBMETRIC_NAME.SOAPFAR]: {
                [ADJUSTMENT.A]: 2,
            },
            [SUBMETRIC_NAME.COAPF]: {
                [ADJUSTMENT.WEIGHT]: 0.577,
            }
        }

        const result = computeParametersFromCombinedAdjustments(combinedAdjustments)

        expect(result).toEqual({
            [SUBMETRIC_NAME.SOAPFAR]: {
                adjustments: {
                    [ADJUSTMENT.A]: 2,
                },
                submetricType: SUBMETRIC_TYPE[SUBMETRIC_NAME.SOAPFAR]
            },
            [SUBMETRIC_NAME.COAPF]: {
                adjustments: {
                    [ADJUSTMENT.WEIGHT]: 0.577,
                },
                submetricType: SUBMETRIC_TYPE[SUBMETRIC_NAME.COAPF]
            },
        })
    })
})
