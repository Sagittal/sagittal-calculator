import { combineSubmetricsPoints } from "../../../../../src/scripts/unpopularityMetric/submetricCombinations/combineSubmetricsPoints"
import { DynamicParameter, Parameter, SubmetricType } from "../../../../../src/scripts/unpopularityMetric/types"
import {
    ParameterPoint,
    SubmetricPoint,
} from "../../../../../src/scripts/unpopularityMetric/submetricCombinations/types"

describe("combineSubmetricsPoints", () => {
    it("takes the list of possible points for each submetric individually, and returns a list of every possible combination of them, along with its point, which is then called a 'submetric combination'", () => {
        const submetricOnePointOne: SubmetricPoint = {
            [ Parameter.A ]: 0.5 as ParameterPoint,
            [ Parameter.Y ]: 1.5 as ParameterPoint,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPFAR,
        }
        const submetricOnePointTwo: SubmetricPoint = {
            [ Parameter.A ]: 0.5 as ParameterPoint,
            [ Parameter.Y ]: 1.2 as ParameterPoint,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPFAR,
        }
        const submetricOnePointThree: SubmetricPoint = {
            [ Parameter.A ]: 0.5 as ParameterPoint,
            [ Parameter.Y ]: 0.9 as ParameterPoint,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPFAR,
        }
        const submetricTwoPointOne: SubmetricPoint = {
            [ Parameter.Y ]: 0.9 as ParameterPoint,
            [ Parameter.A ]: 0.7 as ParameterPoint,
        }
        const submetricTwoPointTwo: SubmetricPoint = {
            [ Parameter.Y ]: 1.1 as ParameterPoint,
            [ Parameter.A ]: 0.7 as ParameterPoint,
        }
        const submetricTwoPointThree: SubmetricPoint = {
            [ Parameter.Y ]: 0.9 as ParameterPoint,
            [ Parameter.A ]: 0.6 as ParameterPoint,
        }
        const submetricTwoPointFour: SubmetricPoint = {
            [ Parameter.Y ]: 1.1 as ParameterPoint,
            [ Parameter.A ]: 0.6 as ParameterPoint,
        }

        const submetricsPoints: SubmetricPoint[][] = [
            [submetricOnePointOne, submetricOnePointTwo, submetricOnePointThree],
            [submetricTwoPointOne, submetricTwoPointTwo, submetricTwoPointThree, submetricTwoPointFour],
        ]
        const dynamicParameters: DynamicParameter[] = [
            { submetricIndex: 0, parameter: Parameter.Y, parameterPoints: [1.5, 1.2, 0.9] as ParameterPoint[], unit: 0 },
            { submetricIndex: 1, parameter: Parameter.Y, parameterPoints: [0.9, 1.1] as ParameterPoint[], unit: 0 },
            { submetricIndex: 1, parameter: Parameter.A, parameterPoints: [0.7, 0.6] as ParameterPoint[], unit: 0 },
        ]

        const result = combineSubmetricsPoints({ submetricsPoints, dynamicParameters })

        const expectedResult = [                                                                 // by submetric    // by submetric & parameter // by dynamic parameter
            { submetrics: [submetricOnePointOne, submetricTwoPointOne], point: [0, 0, 0] },      // [0, 0]          // [ [0, 0, 0], [0, 0] ]    // [ 0, 0, 0 ]
            { submetrics: [submetricOnePointOne, submetricTwoPointTwo], point: [0, 1, 0] },      // [0, 1]          // [ [0, 0, 0], [1, 0] ]    // [ 0, 1, 0 ]
            { submetrics: [submetricOnePointOne, submetricTwoPointThree], point: [0, 0, 1] },    // [0, 0]          // [ [0, 0, 0], [0, 1] ]    // [ 0, 0, 1 ]
            { submetrics: [submetricOnePointOne, submetricTwoPointFour], point: [0, 1, 1] },     // [0, 1]          // [ [0, 0, 0], [1, 1] ]    // [ 0, 1, 1 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointOne], point: [1, 0, 0] },      // [1, 0]          // [ [0, 1, 0], [0, 0] ]    // [ 1, 0, 0 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointTwo], point: [1, 1, 0] },      // [1, 1]          // [ [0, 1, 0], [1, 0] ]    // [ 1, 1, 0 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointThree], point: [1, 0, 1] },    // [1, 0]          // [ [0, 1, 0], [0, 1] ]    // [ 1, 0, 1 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointFour], point: [1, 1, 1] },     // [1, 1]          // [ [0, 1, 0], [1, 1] ]    // [ 1, 1, 1 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointOne], point: [2, 0, 0] },    // [2, 0]          // [ [0, 2, 0], [0, 0] ]    // [ 2, 0, 0 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointTwo], point: [2, 1, 0] },    // [2, 1]          // [ [0, 2, 0], [1, 0] ]    // [ 2, 1, 0 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointThree], point: [2, 0, 1] },  // [2, 0]          // [ [0, 2, 0], [0, 1] ]    // [ 2, 0, 1 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointFour], point: [2, 1, 1] },   // [2, 1]          // [ [0, 2, 0], [1, 1] ]    // [ 2, 1, 1 ]
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })
})
