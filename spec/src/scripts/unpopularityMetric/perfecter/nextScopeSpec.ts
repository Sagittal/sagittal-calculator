import { Index, Resolution, Span, Unit } from "../../../../../src/general"
import { Scope } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { DynamicParameter, SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { computeNextScope } from "../../../../../src/scripts/unpopularityMetric/perfecter/nextScope"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeNextScope", () => {
    it("given a sample point (which has been identified as a local min) and the dynamic parameters, is able to tell you what the next scopes should be to delve deeper in that vicinity", () => {
        const samplePoint = [1, 0, 3] as SamplePoint
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.J_AS_COEFFICIENT,
                values: [0, 0.1, 0.2, 0.3, 0.4, 0.5] as ParameterValue[],
                unit: 0.1 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.W,
                values: [0, 0.5, 1] as ParameterValue[],
                unit: 0.5 as Unit<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [2, 2.02, 2.04, 2.06, 2.08, 2.1] as ParameterValue[],
                unit: 0.02 as Unit<ParameterValue>,
            },
        ]
        const scope: Scope = [
            {
                [ Parameter.J_AS_COEFFICIENT ]: {
                    center: 0.1 as ParameterValue,
                    span: 0.05 as Span<ParameterValue>,
                    resolution: 5 as Resolution<ParameterValue>,
                },
                // haha... it just doesn't care what your previous resolution was.
                // well, that's why I had the top-level script point to the same constant that this module uses,
                // to generally prevent that.
                [ Parameter.W ]: {
                    center: 0 as ParameterValue,
                    span: 0.25 as Span<ParameterValue>,
                    resolution: 5 as Resolution<ParameterValue>,
                },
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
            },
            {
                [ Parameter.Y ]: {
                    center: 2.06 as ParameterValue,
                    span: 0.01 as Span<ParameterValue>,
                    resolution: 5 as Resolution<ParameterValue>,
                },
                [ Parameter.COUNT ]: true,
            },
        ] as Scope

        const actual = computeNextScope(samplePoint, dynamicParameters, scope)

        const expected = [
            {
                [ Parameter.J_AS_COEFFICIENT ]: {
                    center: 0.1 as ParameterValue,
                    span: 0.06666666666666667 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.W ]: {
                    center: 0 as ParameterValue,
                    span: 0.3333333333333333 as Span<ParameterValue>,
                    resolution: 4 as Resolution<ParameterValue>,
                },
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
            },
            {
                [ Parameter.Y ]: {
                    center: 2.06 as ParameterValue,
                    span: 0.013333333333333332 as Span<ParameterValue>,
                    resolution: 2 as Resolution<ParameterValue>,
                },
                [ Parameter.COUNT ]: true,
            },
        ] as Scope
        expect(actual).toEqual(expected)
    })
})
