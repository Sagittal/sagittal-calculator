import { Combination, deepEquals, Index, Unit } from "../../../../../../src/general"
import { combineSubmetricsPossibilitiesIntoSamples } from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/combineSubmetricsPossibilitiesIntoSamples"
import {
    DynamicParameter,
    Sample,
    SamplePoint,
    SubmetricPossibility,
} from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("combineSubmetricsPossibilitiesIntoSamples", () => {
    it("takes the list of possible values for each submetric individually, and returns a list of every possible combination of them, along with its corresponding sample point, which is then called a Sample; it also takes the zeroth submetric scope ", () => {
        const submetricZeroPossibilityOne = {
            [ Parameter.K_AS_COEFFICIENT ]: 0.33 as ParameterValue,
        } as SubmetricPossibility
        const submetricZeroPossibilityTwo = {
            [ Parameter.K_AS_COEFFICIENT ]: 0.45 as ParameterValue,
        } as SubmetricPossibility
        const submetricOnePossibilityOne: SubmetricPossibility = {
            [ Parameter.A_AS_COEFFICIENT ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 1.5 as ParameterValue,
            [ Parameter.COUNT ]: true,
        } as SubmetricPossibility
        const submetricOnePossibilityTwo: SubmetricPossibility = {
            [ Parameter.A_AS_COEFFICIENT ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 1.2 as ParameterValue,
            [ Parameter.COUNT ]: true,
        } as SubmetricPossibility
        const submetricOnePossibilityThree: SubmetricPossibility = {
            [ Parameter.A_AS_COEFFICIENT ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.COUNT ]: true,
        } as SubmetricPossibility
        const submetricTwoPossibilityOne: SubmetricPossibility = {
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.7 as ParameterValue,
        } as SubmetricPossibility
        const submetricTwoPossibilityTwo: SubmetricPossibility = {
            [ Parameter.Y ]: 1.1 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.7 as ParameterValue,
        } as SubmetricPossibility
        const submetricTwoPossibilityThree: SubmetricPossibility = {
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.6 as ParameterValue,
        } as SubmetricPossibility
        const submetricTwoPossibilityFour: SubmetricPossibility = {
            [ Parameter.Y ]: 1.1 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.6 as ParameterValue,
        } as SubmetricPossibility

        const submetricsPossibilities: Combination<SubmetricPossibility>[] = [
            [submetricZeroPossibilityOne, submetricZeroPossibilityTwo] as Combination<SubmetricPossibility>,
            [submetricOnePossibilityOne, submetricOnePossibilityTwo, submetricOnePossibilityThree] as Combination<SubmetricPossibility>,
            [submetricTwoPossibilityOne, submetricTwoPossibilityTwo, submetricTwoPossibilityThree, submetricTwoPossibilityFour] as Combination<SubmetricPossibility>,
        ]
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.K_AS_COEFFICIENT,
                values: [0.33, 0.45] as ParameterValue[],
                unit: 0.12 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [1.5, 1.2, 0.9] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 2 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 2 as Index<Submetric>,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.7, 0.6] as ParameterValue[],
                unit: 0 as Unit<ParameterValue>,
            },
        ]

        const result = combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })

                                                                                                        // TODO: these comments need updating, and this is just horrible to look at...
        const expectedResult = [                                                                        // by submetric    // by submetric & parameter // by dynamic parameter
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityOne, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 0, 0, 0] as SamplePoint },       // [0, 0]          // [ [0, 0, 0], [0, 0] ]    // [ 0, 0, 0 ]
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityTwo, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 0, 1, 0] as SamplePoint },       // [0, 1]          // [ [0, 0, 0], [1, 0] ]    // [ 0, 1, 0 ]
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityThree, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 0, 0, 1] as SamplePoint },     // [0, 0]          // [ [0, 0, 0], [0, 1] ]    // [ 0, 0, 1 ]
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityFour, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 0, 1, 1] as SamplePoint },      // [0, 1]          // [ [0, 0, 0], [1, 1] ]    // [ 0, 1, 1 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityOne, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 1, 0, 0] as SamplePoint },       // [1, 0]          // [ [0, 1, 0], [0, 0] ]    // [ 1, 0, 0 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityTwo, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 1, 1, 0] as SamplePoint },       // [1, 1]          // [ [0, 1, 0], [1, 0] ]    // [ 1, 1, 0 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityThree, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 1, 0, 1] as SamplePoint },     // [1, 0]          // [ [0, 1, 0], [0, 1] ]    // [ 1, 0, 1 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityFour, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 1, 1, 1] as SamplePoint },      // [1, 1]          // [ [0, 1, 0], [1, 1] ]    // [ 1, 1, 1 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityOne, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 2, 0, 0] as SamplePoint },     // [2, 0]          // [ [0, 2, 0], [0, 0] ]    // [ 2, 0, 0 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityTwo, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 2, 1, 0] as SamplePoint },     // [2, 1]          // [ [0, 2, 0], [1, 0] ]    // [ 2, 1, 0 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityThree, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 2, 0, 1] as SamplePoint },   // [2, 0]          // [ [0, 2, 0], [0, 1] ]    // [ 2, 0, 1 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityOne} as Submetric, {...submetricTwoPossibilityFour, ...submetricZeroPossibilityOne} as Submetric] as Combination<Submetric>, samplePoint: [0, 2, 1, 1] as SamplePoint },    // [2, 1]          // [ [0, 2, 0], [1, 1] ]    // [ 2, 1, 1 ]
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityOne, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 0, 0, 0] as SamplePoint },       // [0, 0]          // [ [0, 0, 0], [0, 0] ]    // [ 0, 0, 0 ]
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityTwo, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 0, 1, 0] as SamplePoint },       // [0, 1]          // [ [0, 0, 0], [1, 0] ]    // [ 0, 1, 0 ]
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityThree, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 0, 0, 1] as SamplePoint },     // [0, 0]          // [ [0, 0, 0], [0, 1] ]    // [ 0, 0, 1 ]
            { submetrics: [{...submetricOnePossibilityOne, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityFour, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 0, 1, 1] as SamplePoint },      // [0, 1]          // [ [0, 0, 0], [1, 1] ]    // [ 0, 1, 1 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityOne, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 1, 0, 0] as SamplePoint },       // [1, 0]          // [ [0, 1, 0], [0, 0] ]    // [ 1, 0, 0 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityTwo, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 1, 1, 0] as SamplePoint },       // [1, 1]          // [ [0, 1, 0], [1, 0] ]    // [ 1, 1, 0 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityThree, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 1, 0, 1] as SamplePoint },     // [1, 0]          // [ [0, 1, 0], [0, 1] ]    // [ 1, 0, 1 ]
            { submetrics: [{...submetricOnePossibilityTwo, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityFour, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 1, 1, 1] as SamplePoint },      // [1, 1]          // [ [0, 1, 0], [1, 1] ]    // [ 1, 1, 1 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityOne, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 2, 0, 0] as SamplePoint },     // [2, 0]          // [ [0, 2, 0], [0, 0] ]    // [ 2, 0, 0 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityTwo, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 2, 1, 0] as SamplePoint },     // [2, 1]          // [ [0, 2, 0], [1, 0] ]    // [ 2, 1, 0 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityThree, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 2, 0, 1] as SamplePoint },   // [2, 0]          // [ [0, 2, 0], [0, 1] ]    // [ 2, 0, 1 ]
            { submetrics: [{...submetricOnePossibilityThree, ...submetricZeroPossibilityTwo} as Submetric, {...submetricTwoPossibilityFour, ...submetricZeroPossibilityTwo} as Submetric] as Combination<Submetric>, samplePoint: [1, 2, 1, 1] as SamplePoint },    // [2, 1]          // [ [0, 2, 0], [1, 1] ]    // [ 2, 1, 1 ]
        ] as Sample[]

        // TODO: perhaps we need some helpers for this sort of thing
        expect(result.length).toBe(expectedResult.length)
        expectedResult.forEach(expectedResultElement => {
            expect(result.some(resultElement => {
                return deepEquals(resultElement, expectedResultElement)
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })
})
