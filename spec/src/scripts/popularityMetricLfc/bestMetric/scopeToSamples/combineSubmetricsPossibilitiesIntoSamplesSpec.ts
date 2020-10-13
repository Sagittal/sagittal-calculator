import { Combination, Index, Step } from "../../../../../../src/general"
import { combineSubmetricsPossibilitiesIntoSamples } from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/combineSubmetricsPossibilitiesIntoSamples"
import {
    DynamicParameter,
    Sample,
    SamplePoint,
    SubmetricPossibility,
} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("combineSubmetricsPossibilitiesIntoSamples", (): void => {
    it("takes the list of possible values for each submetric individually, and returns a list of every possible combination of them, along with its corresponding sample point, which is then all together called a Sample; it also takes the zeroth submetric scope (the all bins one) and spreads it across every submetric", (): void => {
        // Submetric zero has two possibilities
        const submetricZeroPossibilityA = {
            [ Parameter.K_AS_COEFFICIENT ]: 0.33 as ParameterValue,
        } as SubmetricPossibility
        const submetricZeroPossibilityB = {
            [ Parameter.K_AS_COEFFICIENT ]: 0.45 as ParameterValue,
        } as SubmetricPossibility

        // Submetric one has three possibilities
        const submetricAPossibilityA: SubmetricPossibility = {
            [ Parameter.A_AS_COEFFICIENT ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 1.5 as ParameterValue,
            [ Parameter.COUNT ]: true,
        } as SubmetricPossibility
        const submetricAPossibilityB: SubmetricPossibility = {
            [ Parameter.A_AS_COEFFICIENT ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 1.2 as ParameterValue,
            [ Parameter.COUNT ]: true,
        } as SubmetricPossibility
        const submetricAPossibilityC: SubmetricPossibility = {
            [ Parameter.A_AS_COEFFICIENT ]: 0.5 as ParameterValue,
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.COUNT ]: true,
        } as SubmetricPossibility

        // Submetric two has four possibilities (2x2: 2 for y, 2 for a)
        const submetricBPossibilityA: SubmetricPossibility = {
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.7 as ParameterValue,
        } as SubmetricPossibility
        const submetricBPossibilityB: SubmetricPossibility = {
            [ Parameter.Y ]: 1.1 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.7 as ParameterValue,
        } as SubmetricPossibility
        const submetricBPossibilityC: SubmetricPossibility = {
            [ Parameter.Y ]: 0.9 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.6 as ParameterValue,
        } as SubmetricPossibility
        const submetricBPossibilityD: SubmetricPossibility = {
            [ Parameter.Y ]: 1.1 as ParameterValue,
            [ Parameter.A_AS_COEFFICIENT ]: 0.6 as ParameterValue,
        } as SubmetricPossibility

        // Now remember: submetric zero is the "all bins" one, so that's why there's actually only two submetrics
        // In each of the output results, and a possibility from submetric zero is spread into each of them,
        // But whatever possibility it is, it is spread the same one across all of them
        const submetricsPossibilities: Array<Combination<SubmetricPossibility>> = [
            [
                submetricZeroPossibilityA,
                submetricZeroPossibilityB,
            ] as Combination<SubmetricPossibility>,
            [
                submetricAPossibilityA,
                submetricAPossibilityB,
                submetricAPossibilityC,
            ] as Combination<SubmetricPossibility>,
            [
                submetricBPossibilityA,
                submetricBPossibilityB,
                submetricBPossibilityC,
                submetricBPossibilityD,
            ] as Combination<SubmetricPossibility>,
        ]

        const dynamicParameters: DynamicParameter[] = [
            // Submetric zero had 2 possibilities, both variants of a single dynamic parameter
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.K_AS_COEFFICIENT,
                values: [0.33, 0.45] as ParameterValue[],       // Here's the two possibilities
                unit: 0.12 as Step<ParameterValue>,
            },

            // Submetric one had 3 possibilities, all variants of a single dynamic parameter
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [1.5, 1.2, 0.9] as ParameterValue[],    // Here's the three possibilities
                unit: 0 as Step<ParameterValue>,
            },

            // Submetric two had 4 possibilities, combinations of 2 dynamic parameters each with 2 possibilities
            // (yes it features a dynamic parameter which is the same parameter as one in a different submetric --
            // Y is shared with submetric one -- but that's perfectly okay)
            {
                submetricIndex: 2 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as ParameterValue[],        // Here's the first of two sets of two possibilities
                unit: 0 as Step<ParameterValue>,
            },
            {
                submetricIndex: 2 as Index<Submetric>,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.7, 0.6] as ParameterValue[],        // Here's the second of two sets of two possibilities
                unit: 0 as Step<ParameterValue>,
            },
        ]

        const actual: Sample[] =
            combineSubmetricsPossibilitiesIntoSamples({ submetricsPossibilities, dynamicParameters })

        // SamplePoint: [
        // Submetric zero's one dynamic parameter,
        // Submetric one's one dynamic parameter,
        // Submetric two's first dynamic parameter,
        // Submetric two's second dynamic parameter
        // ]
        const expected = [
            // In this section, submetric zero (all bins) is at possibility 1 of 2
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityA } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 0, 0, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityB } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 0, 1, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityC } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 0, 0, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityD } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 0, 1, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityA } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 1, 0, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityB } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 1, 1, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityC } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 1, 0, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityD } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 1, 1, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityA } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 2, 0, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityB } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 2, 1, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityC } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 2, 0, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityA, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityA, ...submetricBPossibilityD } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [0, 2, 1, 1] as SamplePoint,
            },

            // In this section, submetric zero (all bins) is at possibility 2 of 2, otherwise a copy of the above
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityA } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 0, 0, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityB } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 0, 1, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityC } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 0, 0, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityA } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityD } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 0, 1, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityA } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 1, 0, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityB } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 1, 1, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityC } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 1, 0, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityB } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityD } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 1, 1, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityA } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 2, 0, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityB } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 2, 1, 0] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityC } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 2, 0, 1] as SamplePoint,
            },
            {
                submetrics: [
                    { ...submetricZeroPossibilityB, ...submetricAPossibilityC } as Submetric,
                    { ...submetricZeroPossibilityB, ...submetricBPossibilityD } as Submetric,
                ] as Combination<Submetric>,
                samplePoint: [1, 2, 1, 1] as SamplePoint,
            },
        ] as Sample[]

        expect(actual.length).toBe(2 * 3 * 2 * 2) // The counts of possibilities for each of the dynamic parameters
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })
})
