import {Ed, Index, Step, Window} from "../../../../../../src/general"
import {Scope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeDynamicParameters} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import {PopularityParameterId, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {Parameter} from "../../../../../../src/scripts/types"

describe("computeDynamicParameters", (): void => {
    it("returns a flattened array of all the parameters that are dynamic -- flattened across all the submetrics, that is", (): void => {
        const scope: Scope = [
            {
                [PopularityParameterId.Y]: {
                    center: 1.2 as Parameter,
                    window: 1 as Window<Parameter>,
                    ed: 3 as Ed<Parameter>,
                },
                [PopularityParameterId.W]: 4 as Parameter,
            },
            {
                [PopularityParameterId.COUNT]: true,
                [PopularityParameterId.Y]: {
                    center: 1.0 as Parameter,
                    window: 0.2 as Window<Parameter>,
                    ed: 2 as Ed<Parameter>,
                },
                [PopularityParameterId.A_AS_COEFFICIENT]: {
                    center: 0.65 as Parameter,
                    window: 0.1 as Window<Parameter>,
                    ed: 2 as Ed<Parameter>,
                },
            },
        ] as Scope

        const actual = computeDynamicParameters(scope)

        const expected = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: PopularityParameterId.Y,
                values: [0.7, 1.2, 1.7] as Parameter[],
                unit: 0.5 as Step<Parameter>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: PopularityParameterId.Y,
                values: [0.9, 1.1] as Parameter[],
                unit: 0.2 as Step<Parameter>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: PopularityParameterId.A_AS_COEFFICIENT,
                values: [0.6, 0.7] as Parameter[],
                unit: 0.1 as Step<Parameter>,
            },
        ]
        expect(actual).toEqual(expected)
    })
})
