import {Ed, Index, Parameter, Step, Window} from "../../../../../src/general"
import {DynamicParameter, SamplePoint, Scope} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeNextScope} from "../../../../../src/scripts/popularityMetricLfc/perfecter/nextScope"
import {PopularityParameterId, Submetric} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeNextScope", (): void => {
    it("given a sample point (which has been identified as a local min) and the dynamic parameters, is able to tell you what the next scopes should be to delve deeper in that vicinity", (): void => {
        const samplePoint = [1, 0, 3] as SamplePoint
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: PopularityParameterId.J_AS_COEFFICIENT,
                values: [0, 0.1, 0.2, 0.3, 0.4, 0.5] as Parameter[],
                unit: 0.1 as Step<{of: Parameter}>,
            },
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: PopularityParameterId.W,
                values: [0, 0.5, 1] as Parameter[],
                unit: 0.5 as Step<{of: Parameter}>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: PopularityParameterId.Y,
                values: [2, 2.02, 2.04, 2.06, 2.08, 2.1] as Parameter[],
                unit: 0.02 as Step<{of: Parameter}>,
            },
        ]
        const scope: Scope = [
            {
                [PopularityParameterId.J_AS_COEFFICIENT]: {
                    center: 0.1 as Parameter,
                    window: 0.05 as Window<{of: Parameter}>,
                    ed: 5 as Ed<{of: Parameter}>,
                },
                // Haha... it just doesn't care what your previous ED was.
                // Well, that's why I had the top-level script point to the same constant that this module uses,
                // To generally prevent that.
                [PopularityParameterId.W]: {
                    center: 0 as Parameter,
                    window: 0.25 as Window<{of: Parameter}>,
                    ed: 5 as Ed<{of: Parameter}>,
                },
                [PopularityParameterId.A_AS_COEFFICIENT]: 2 as Parameter,
            },
            {
                [PopularityParameterId.Y]: {
                    center: 2.06 as Parameter,
                    window: 0.01 as Window<{of: Parameter}>,
                    ed: 5 as Ed<{of: Parameter}>,
                },
                [PopularityParameterId.COUNT]: true,
            },
        ] as Scope

        const actual = computeNextScope(samplePoint, dynamicParameters, scope)

        const expected = [
            {
                [PopularityParameterId.J_AS_COEFFICIENT]: {
                    center: 0.1 as Parameter,
                    window: 0.066667 as Window<{of: Parameter}>,
                    ed: 2 as Ed<{of: Parameter}>,
                },
                [PopularityParameterId.W]: {
                    center: 0 as Parameter,
                    window: 0.333333 as Window<{of: Parameter}>,
                    ed: 4 as Ed<{of: Parameter}>,
                },
                [PopularityParameterId.A_AS_COEFFICIENT]: 2 as Parameter,
            },
            {
                [PopularityParameterId.Y]: {
                    center: 2.06 as Parameter,
                    window: 0.013333 as Window<{of: Parameter}>,
                    ed: 2 as Ed<{of: Parameter}>,
                },
                [PopularityParameterId.COUNT]: true,
            },
        ] as Scope
        expect(actual).toBeCloseToObject(expected)
    })
})
