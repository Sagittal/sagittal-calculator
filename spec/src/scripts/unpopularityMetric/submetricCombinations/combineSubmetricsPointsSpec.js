const {combineSubmetricsPoints} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/combineSubmetricsPoints")
const {SUBMETRIC_TYPE, PARAMETER} = require("../../../../../src/scripts/unpopularityMetric/constants")

describe("combineSubmetricsPoints", () => {
    it("takes the list of possible points for each submetric individually, and returns a list of every possible combination of them, which is then called a 'submetric combination'", () => {
        const submetricOnePointOne = {[PARAMETER.A]: 0.5, [PARAMETER.Y]: 1.5, [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR}
        const submetricOnePointTwo = {[PARAMETER.A]: 0.5, [PARAMETER.Y]: 1.2, [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR}
        const submetricTwoPointOne = {[PARAMETER.A]: 0.7, [PARAMETER.Y]: 0.9, [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF}
        const submetricTwoPointTwo = {[PARAMETER.A]: 0.7, [PARAMETER.Y]: 1.1, [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPF}

        const submetricsPoints = [
            [submetricOnePointOne, submetricOnePointTwo],
            [submetricTwoPointOne, submetricTwoPointTwo],
        ]

        const result = combineSubmetricsPoints(submetricsPoints)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [submetricOnePointOne, submetricTwoPointOne],
            [submetricOnePointOne, submetricTwoPointTwo],
            [submetricOnePointTwo, submetricTwoPointOne],
            [submetricOnePointTwo, submetricTwoPointTwo],
        ]))
    })
})
