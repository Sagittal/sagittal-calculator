import {combineSubmetricsPoints} from "../../../../../src/scripts/unpopularityMetric/submetricCombinations/combineSubmetricsPoints"
import {SUBMETRIC_TYPE, PARAMETER} from "../../../../../src/scripts/unpopularityMetric/constants"

describe("combineSubmetricsPoints", () => {
    it("takes the list of possible points for each submetric individually, and returns a list of every possible combination of them, along with its coordinate, which is then called a 'submetric combination'", () => {
        const submetricOnePointOne = {
            [PARAMETER.A]: 0.5,
            [PARAMETER.Y]: 1.5,
            [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
        }
        const submetricOnePointTwo = {
            [PARAMETER.A]: 0.5,
            [PARAMETER.Y]: 1.2,
            [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
        }
        const submetricOnePointThree = {
            [PARAMETER.A]: 0.5,
            [PARAMETER.Y]: 0.9,
            [PARAMETER.SUBMETRIC_TYPE]: SUBMETRIC_TYPE.SOAPFAR,
        }
        const submetricTwoPointOne = {
            [PARAMETER.Y]: 0.9,
            [PARAMETER.A]: 0.7,
        }
        const submetricTwoPointTwo = {
            [PARAMETER.Y]: 1.1,
            [PARAMETER.A]: 0.7,
        }
        const submetricTwoPointThree = {
            [PARAMETER.Y]: 0.9,
            [PARAMETER.A]: 0.6,
        }
        const submetricTwoPointFour = {
            [PARAMETER.Y]: 1.1,
            [PARAMETER.A]: 0.6,
        }

        const submetricsPoints = [
            [submetricOnePointOne, submetricOnePointTwo, submetricOnePointThree],
            [submetricTwoPointOne, submetricTwoPointTwo, submetricTwoPointThree, submetricTwoPointFour],
        ]
        const dynamicParameters = [
            { submetricIndex: 0, parameter: PARAMETER.Y, parameterPoints: [1.5, 1.2, 0.9] },
            { submetricIndex: 1, parameter: PARAMETER.Y, parameterPoints: [0.9, 1.1] },
            { submetricIndex: 1, parameter: PARAMETER.A, parameterPoints: [0.7, 0.6] },
        ]

        const result = combineSubmetricsPoints({submetricsPoints, dynamicParameters})

        const expectedResult = [                                                                    // by submetric    // by submetric & parameter // by dynamic parameter
            {submetrics: [submetricOnePointOne, submetricTwoPointOne], coordinate: [0, 0, 0]},      // [0, 0]           // [ [0, 0, 0], [0, 0] ]    // [ 0, 0, 0 ]
            {submetrics: [submetricOnePointOne, submetricTwoPointTwo], coordinate: [0, 1, 0]},      // [0, 1]           // [ [0, 0, 0], [1, 0] ]    // [ 0, 1, 0 ]
            {submetrics: [submetricOnePointOne, submetricTwoPointThree], coordinate: [0, 0, 1]},    // [0, 0]           // [ [0, 0, 0], [0, 1] ]    // [ 0, 0, 1 ]
            {submetrics: [submetricOnePointOne, submetricTwoPointFour], coordinate: [0, 1, 1]},     // [0, 1]           // [ [0, 0, 0], [1, 1] ]    // [ 0, 1, 1 ]
            {submetrics: [submetricOnePointTwo, submetricTwoPointOne], coordinate: [1, 0, 0]},      // [1, 0]           // [ [0, 1, 0], [0, 0] ]    // [ 1, 0, 0 ]
            {submetrics: [submetricOnePointTwo, submetricTwoPointTwo], coordinate: [1, 1, 0]},      // [1, 1]           // [ [0, 1, 0], [1, 0] ]    // [ 1, 1, 0 ]
            {submetrics: [submetricOnePointTwo, submetricTwoPointThree], coordinate: [1, 0, 1]},    // [1, 0]           // [ [0, 1, 0], [0, 1] ]    // [ 1, 0, 1 ]
            {submetrics: [submetricOnePointTwo, submetricTwoPointFour], coordinate: [1, 1, 1]},     // [1, 1]           // [ [0, 1, 0], [1, 1] ]    // [ 1, 1, 1 ]
            {submetrics: [submetricOnePointThree, submetricTwoPointOne], coordinate: [2, 0, 0]},    // [2, 0]           // [ [0, 2, 0], [0, 0] ]    // [ 2, 0, 0 ]
            {submetrics: [submetricOnePointThree, submetricTwoPointTwo], coordinate: [2, 1, 0]},    // [2, 1]           // [ [0, 2, 0], [1, 0] ]    // [ 2, 1, 0 ]
            {submetrics: [submetricOnePointThree, submetricTwoPointThree], coordinate: [2, 0, 1]},  // [2, 0]           // [ [0, 2, 0], [0, 1] ]    // [ 2, 0, 1 ]
            {submetrics: [submetricOnePointThree, submetricTwoPointFour], coordinate: [2, 1, 1]},   // [2, 1]           // [ [0, 2, 0], [1, 1] ]    // [ 2, 1, 1 ]
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })
})
