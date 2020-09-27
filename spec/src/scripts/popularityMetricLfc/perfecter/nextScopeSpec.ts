import { Ed, Index, Step, Window } from "../../../../../src/general"
import { Scope } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { DynamicParameter, SamplePoint } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import { computeNextScope } from "../../../../../src/scripts/popularityMetricLfc/perfecter/nextScope"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeNextScope", (): void => {
    it("given a sample point (which has been identified as a local min) and the dynamic parameters, is able to tell you what the next scopes should be to delve deeper in that vicinity", (): void => {
        const samplePoint = [1, 0, 3] as SamplePoint
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.J_AS_COEFFICIENT,
                values: [0, 0.1, 0.2, 0.3, 0.4, 0.5] as ParameterValue[],
                unit: 0.1 as Step<ParameterValue>,
            },
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.W,
                values: [0, 0.5, 1] as ParameterValue[],
                unit: 0.5 as Step<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [2, 2.02, 2.04, 2.06, 2.08, 2.1] as ParameterValue[],
                unit: 0.02 as Step<ParameterValue>,
            },
        ]
        const scope: Scope = [
            {
                [ Parameter.J_AS_COEFFICIENT ]: {
                    center: 0.1 as ParameterValue,
                    window: 0.05 as Window<ParameterValue>,
                    ed: 5 as Ed<ParameterValue>,
                },
                // Haha... it just doesn't care what your previous ED was.
                // Well, that's why I had the top-level script point to the same constant that this module uses,
                // To generally prevent that.
                [ Parameter.W ]: {
                    center: 0 as ParameterValue,
                    window: 0.25 as Window<ParameterValue>,
                    ed: 5 as Ed<ParameterValue>,
                },
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
            },
            {
                [ Parameter.Y ]: {
                    center: 2.06 as ParameterValue,
                    window: 0.01 as Window<ParameterValue>,
                    ed: 5 as Ed<ParameterValue>,
                },
                [ Parameter.COUNT ]: true,
            },
        ] as Scope

        const actual = computeNextScope(samplePoint, dynamicParameters, scope)

        const expected = [
            {
                [ Parameter.J_AS_COEFFICIENT ]: {
                    center: 0.1 as ParameterValue,
                    window: 0.066667 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
                [ Parameter.W ]: {
                    center: 0 as ParameterValue,
                    window: 0.333333 as Window<ParameterValue>,
                    ed: 4 as Ed<ParameterValue>,
                },
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
            },
            {
                [ Parameter.Y ]: {
                    center: 2.06 as ParameterValue,
                    window: 0.013333 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
                [ Parameter.COUNT ]: true,
            },
        ] as Scope
        expect(actual).toBeCloseToObject(expected)
    })
})
