import { Combination, Index, Unit } from "../../../../../../src/general"
import { combineSubmetricsPossibilitiesIntoSamples } from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/combineSubmetricsPossibilitiesIntoSamples"
import {
    DynamicParameter,
    Sample,
    SamplePoint,
    SubmetricPossibility,
} from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("combineSubmetricsPossibilitiesIntoSamples", () => {
    it(
        `takes the list of possible values for each submetric individually, 
        and returns a list of every possible combination of them,
         along with its corresponding sample point, 
        which is then all together called a Sample; 
        it also takes the zeroth submetric scope (the all bins one) and spreads it across every submetric`,
        () => {
            // submetric zero has two possibilities
            const submetricZeroPossibilityOne = {
                [ Parameter.K_AS_COEFFICIENT ]: 0.33 as ParameterValue,
            } as SubmetricPossibility
            const submetricZeroPossibilityTwo = {
                [ Parameter.K_AS_COEFFICIENT ]: 0.45 as ParameterValue,
            } as SubmetricPossibility

            // submetric one has three possibilities
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

            // submetric two has four possibilities (2x2: 2 for y, 2 for a)
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

            // now remember: submetric zero is the "all bins" one, so that's why there's actually only two submetrics
            // in each of the output results, and a possibility from submetric zero is spread into each of them,
            // but whatever possibility it is, it is spread the same one across all of them
            const submetricsPossibilities: Combination<SubmetricPossibility>[] = [
                [
                    submetricZeroPossibilityOne,
                    submetricZeroPossibilityTwo,
                ] as Combination<SubmetricPossibility>,
                [
                    submetricOnePossibilityOne,
                    submetricOnePossibilityTwo,
                    submetricOnePossibilityThree,
                ] as Combination<SubmetricPossibility>,
                [
                    submetricTwoPossibilityOne,
                    submetricTwoPossibilityTwo,
                    submetricTwoPossibilityThree,
                    submetricTwoPossibilityFour,
                ] as Combination<SubmetricPossibility>,
            ]

            const dynamicParameters: DynamicParameter[] = [
                // submetric zero had 2 possibilities, both variants of a single dynamic parameter
                {
                    submetricIndex: 0 as Index<Submetric>,
                    parameter: Parameter.K_AS_COEFFICIENT,
                    values: [0.33, 0.45] as ParameterValue[],       // here's the two possibilities
                    unit: 0.12 as Unit<ParameterValue>,
                },

                // submetric one had 3 possibilities, all variants of a single dynamic parameter
                {
                    submetricIndex: 1 as Index<Submetric>,
                    parameter: Parameter.Y,
                    values: [1.5, 1.2, 0.9] as ParameterValue[],    // here's the three possibilities
                    unit: 0 as Unit<ParameterValue>,
                },

                // submetric two had 4 possibilities, combinations of 2 dynamic parameters each with 2 possibilities
                // (yes it features a dynamic parameter which is the same parameter as one in a different submetric --
                // y is shared with submetric one -- but that's perfectly okay)
                {
                    submetricIndex: 2 as Index<Submetric>,
                    parameter: Parameter.Y,
                    values: [0.9, 1.1] as ParameterValue[],        // here's the first of two sets of two possibilities
                    unit: 0 as Unit<ParameterValue>,
                },
                {
                    submetricIndex: 2 as Index<Submetric>,
                    parameter: Parameter.A_AS_COEFFICIENT,
                    values: [0.7, 0.6] as ParameterValue[],        // here's the second of two sets of two possibilities
                    unit: 0 as Unit<ParameterValue>,
                },
            ]

            const actual: Sample[] =
                combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })

            // samplePoint: [
            // submetric zero's one dynamic parameter,
            // submetric one's one dynamic parameter,
            // submetric two's first dynamic parameter,
            // submetric two's second dynamic parameter
            // ]
            const expected = [
                // in this section, submetric zero (all bins) is at possibility 1 of 2
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityOne } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 0, 0, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityTwo } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 0, 1, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityThree } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 0, 0, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityFour } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 0, 1, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityOne } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 1, 0, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityTwo } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 1, 1, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityThree } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 1, 0, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityFour } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 1, 1, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityOne } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 2, 0, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityTwo } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 2, 1, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityThree } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 2, 0, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityOne, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityOne, ...submetricTwoPossibilityFour } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [0, 2, 1, 1] as SamplePoint,
                },

                // in this section, submetric zero (all bins) is at possibility 2 of 2, otherwise a copy of the above
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityOne } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 0, 0, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityTwo } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 0, 1, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityThree } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 0, 0, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityOne } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityFour } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 0, 1, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityOne } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 1, 0, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityTwo } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 1, 1, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityThree } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 1, 0, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityTwo } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityFour } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 1, 1, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityOne } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 2, 0, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityTwo } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 2, 1, 0] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityThree } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 2, 0, 1] as SamplePoint,
                },
                {
                    submetrics: [
                        { ...submetricZeroPossibilityTwo, ...submetricOnePossibilityThree } as Submetric,
                        { ...submetricZeroPossibilityTwo, ...submetricTwoPossibilityFour } as Submetric,
                    ] as Combination<Submetric>,
                    samplePoint: [1, 2, 1, 1] as SamplePoint,
                },
            ] as Sample[]

            expect(actual.length).toBe(2 * 3 * 2 * 2) // the counts of possibilities for each of the dynamic parameters
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        },
    )
})
