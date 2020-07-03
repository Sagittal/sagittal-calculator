const {computeUnpopularities} = require("../../../../../src/scripts/unpopularityMetric/sumOfSquares/unpopularities")
const {computeParametersFromCombinedAdjustments} = require("../../../../../src/scripts/unpopularityMetric/parameters/parametersFromCombinedAdjustments")
const {SUBMETRIC_NAME, ADJUSTMENT} = require("../../../../../src/scripts/unpopularityMetric/parameters/constants")

describe("computeUnpopularities", () => {
    it("given a list of real popularities, and parameters for our popularity, returns our estimated unpopularities, which have antivotes instead of votes", () => {
        const realPopularities = [
            {rank: 5, fiveRoughRatio: [7, 5], votes: 1318},
            {rank: 8, fiveRoughRatio: [125, 1], votes: 492},
            {rank: 39, fiveRoughRatio: [55, 49], votes: 51},
        ]
        const combinedAdjustments = {
            [SUBMETRIC_NAME.SOAPFAR]: {
                [ADJUSTMENT.WEIGHT]: 0,
            },
            [SUBMETRIC_NAME.COAPF]: {
                [ADJUSTMENT.WEIGHT]: 1,
            }
        }
        const parameters = computeParametersFromCombinedAdjustments(combinedAdjustments)

        const result = computeUnpopularities(realPopularities, parameters)

        expect(result).toEqual([
            {antivotes: 2, fiveRoughRatio: [7, 5], index: 0},
            {antivotes: 1, fiveRoughRatio: [125, 1], index: 1},
            {antivotes: 3, fiveRoughRatio: [55, 49], index: 2},
        ])
    })
})
