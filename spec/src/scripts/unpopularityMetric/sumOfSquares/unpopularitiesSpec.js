const {computeUnpopularities} = require("../../../../../src/scripts/unpopularityMetric/sumOfSquares/unpopularities")
const {SUBMETRIC_TYPE, PARAMETER} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/constants")

describe("computeUnpopularities", () => {
    it("given a list of real popularities and submetric combinations, returns our estimated unpopularities, which have antivotes instead of votes", () => {
        const realPopularities = [
            {rank: 5, fiveRoughRatio: [7, 5], votes: 1318},
            {rank: 8, fiveRoughRatio: [125, 1], votes: 492},
            {rank: 39, fiveRoughRatio: [55, 49], votes: 51},
        ]
        const submetricCombinations = [
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
                [PARAMETER.WEIGHT]: 0,
            },
            {
                [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.COAPF,
                [PARAMETER.WEIGHT]: 1,
            }
        ]

        const result = computeUnpopularities(realPopularities, submetricCombinations)

        expect(result).toEqual([
            {antivotes: 2, fiveRoughRatio: [7, 5], index: 0},
            {antivotes: 1, fiveRoughRatio: [125, 1], index: 1},
            {antivotes: 3, fiveRoughRatio: [55, 49], index: 2},
        ])
    })
})
