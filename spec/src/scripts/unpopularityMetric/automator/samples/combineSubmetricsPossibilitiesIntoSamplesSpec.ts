import { combineSubmetricsPossibilitiesIntoSamples } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/combineSubmetricsPossibilitiesIntoSamples"
import { Parameter, Submetric, SubmetricType } from "../../../../../../src/scripts/unpopularityMetric/types"
import {
    DynamicParameter,
    DynamicParameterValue,
    ParameterUnit,
} from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import { Combination, Index } from "../../../../../../src/utilities/types"

describe("combineSubmetricsPossibilitiesIntoSamples", () => {
    it("takes the list of possible values for each submetric individually, and returns a list of every possible combination of them, along with its corresponding sample point, which is then called a Sample", () => {
        const submetricOnePointOne: Submetric = {
            [ Parameter.A ]: 0.5 as DynamicParameterValue,
            [ Parameter.Y ]: 1.5 as DynamicParameterValue,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPFAR,
        }
        const submetricOnePointTwo: Submetric = {
            [ Parameter.A ]: 0.5 as DynamicParameterValue,
            [ Parameter.Y ]: 1.2 as DynamicParameterValue,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPFAR,
        }
        const submetricOnePointThree: Submetric = {
            [ Parameter.A ]: 0.5 as DynamicParameterValue,
            [ Parameter.Y ]: 0.9 as DynamicParameterValue,
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.SOAPFAR,
        }
        const submetricTwoPointOne: Submetric = {
            [ Parameter.Y ]: 0.9 as DynamicParameterValue,
            [ Parameter.A ]: 0.7 as DynamicParameterValue,
        }
        const submetricTwoPointTwo: Submetric = {
            [ Parameter.Y ]: 1.1 as DynamicParameterValue,
            [ Parameter.A ]: 0.7 as DynamicParameterValue,
        }
        const submetricTwoPointThree: Submetric = {
            [ Parameter.Y ]: 0.9 as DynamicParameterValue,
            [ Parameter.A ]: 0.6 as DynamicParameterValue,
        }
        const submetricTwoPointFour: Submetric = {
            [ Parameter.Y ]: 1.1 as DynamicParameterValue,
            [ Parameter.A ]: 0.6 as DynamicParameterValue,
        }

        const submetricsPossibilities: Combination<Submetric>[] = [
            [submetricOnePointOne, submetricOnePointTwo, submetricOnePointThree] as Combination<Submetric>,
            [submetricTwoPointOne, submetricTwoPointTwo, submetricTwoPointThree, submetricTwoPointFour] as Combination<Submetric>,
        ]
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [1.5, 1.2, 0.9] as DynamicParameterValue[],
                unit: 0 as ParameterUnit,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as DynamicParameterValue[],
                unit: 0 as ParameterUnit,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A,
                values: [0.7, 0.6] as DynamicParameterValue[],
                unit: 0 as ParameterUnit,
            },
        ]

        const result = combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })

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
