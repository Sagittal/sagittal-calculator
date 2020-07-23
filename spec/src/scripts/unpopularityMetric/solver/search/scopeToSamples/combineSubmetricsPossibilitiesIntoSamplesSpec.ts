import { Combination, Index, Unit } from "../../../../../../../src/general"
import { combineSubmetricsPossibilitiesIntoSamples } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/combineSubmetricsPossibilitiesIntoSamples"
import {
    DynamicParameter,
    SubmetricPossibility,
} from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../../../src/scripts/unpopularityMetric/types"

describe("combineSubmetricsPossibilitiesIntoSamples", () => {
    it("takes the list of possible values for each submetric individually, and returns a list of every possible combination of them, along with its corresponding sample point, which is then called a Sample", () => {
        const submetricOnePointOne: Submetric = {
            [ Parameter.A ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 1.5 as ParameterValue,
            [ Parameter.COUNT ]: true,
        }
        const submetricOnePointTwo: Submetric = {
            [ Parameter.A ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 1.2 as ParameterValue,
            [ Parameter.COUNT ]: true,
        }
        const submetricOnePointThree: Submetric = {
            [ Parameter.A ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.COUNT ]: true,
        }
        const submetricTwoPointOne: Submetric = {
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.A ]: 0.7 as ParameterValue,
        }
        const submetricTwoPointTwo: Submetric = {
            [ Parameter.Y ]: 1.1 as ParameterValue,
            [ Parameter.A ]: 0.7 as ParameterValue,
        }
        const submetricTwoPointThree: Submetric = {
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.A ]: 0.6 as ParameterValue,
        }
        const submetricTwoPointFour: Submetric = {
            [ Parameter.Y ]: 1.1 as ParameterValue,
            [ Parameter.A ]: 0.6 as ParameterValue,
        }

        const submetricsPossibilities: Combination<SubmetricPossibility>[] = [
            [submetricOnePointOne, submetricOnePointTwo, submetricOnePointThree] as Combination<SubmetricPossibility>,
            [submetricTwoPointOne, submetricTwoPointTwo, submetricTwoPointThree, submetricTwoPointFour] as Combination<SubmetricPossibility>,
        ]
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [1.5, 1.2, 0.9] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A,
                values: [0.7, 0.6] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },
        ]

        const result = combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })

        const expectedResult = [                                                                        // by submetric    // by submetric & parameter // by dynamic parameter
            { submetrics: [submetricOnePointOne, submetricTwoPointOne], samplePoint: [0, 0, 0] },       // [0, 0]          // [ [0, 0, 0], [0, 0] ]    // [ 0, 0, 0 ]
            { submetrics: [submetricOnePointOne, submetricTwoPointTwo], samplePoint: [0, 1, 0] },       // [0, 1]          // [ [0, 0, 0], [1, 0] ]    // [ 0, 1, 0 ]
            { submetrics: [submetricOnePointOne, submetricTwoPointThree], samplePoint: [0, 0, 1] },     // [0, 0]          // [ [0, 0, 0], [0, 1] ]    // [ 0, 0, 1 ]
            { submetrics: [submetricOnePointOne, submetricTwoPointFour], samplePoint: [0, 1, 1] },      // [0, 1]          // [ [0, 0, 0], [1, 1] ]    // [ 0, 1, 1 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointOne], samplePoint: [1, 0, 0] },       // [1, 0]          // [ [0, 1, 0], [0, 0] ]    // [ 1, 0, 0 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointTwo], samplePoint: [1, 1, 0] },       // [1, 1]          // [ [0, 1, 0], [1, 0] ]    // [ 1, 1, 0 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointThree], samplePoint: [1, 0, 1] },     // [1, 0]          // [ [0, 1, 0], [0, 1] ]    // [ 1, 0, 1 ]
            { submetrics: [submetricOnePointTwo, submetricTwoPointFour], samplePoint: [1, 1, 1] },      // [1, 1]          // [ [0, 1, 0], [1, 1] ]    // [ 1, 1, 1 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointOne], samplePoint: [2, 0, 0] },     // [2, 0]          // [ [0, 2, 0], [0, 0] ]    // [ 2, 0, 0 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointTwo], samplePoint: [2, 1, 0] },     // [2, 1]          // [ [0, 2, 0], [1, 0] ]    // [ 2, 1, 0 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointThree], samplePoint: [2, 0, 1] },   // [2, 0]          // [ [0, 2, 0], [0, 1] ]    // [ 2, 0, 1 ]
            { submetrics: [submetricOnePointThree, submetricTwoPointFour], samplePoint: [2, 1, 1] },    // [2, 1]          // [ [0, 2, 0], [1, 1] ]    // [ 2, 1, 1 ]
        ]
        expect(result).toEqual(jasmine.arrayWithExactContents(expectedResult))
    })
})
