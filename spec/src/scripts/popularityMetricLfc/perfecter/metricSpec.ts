import { Ed, Window } from "../../../../../src/general"
import { Combination } from "../../../../../src/general/math"
import {
    MetricName,
    Scope,
    SubmetricScope,
    SumOfSquares,
} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "../../../../../src/scripts/popularityMetricLfc/perfecter"
import { perfectMetric } from "../../../../../src/scripts/popularityMetricLfc/perfecter/metric"
import * as recursiveBestMetric from "../../../../../src/scripts/popularityMetricLfc/perfecter/recursiveBestMetric"
import { MetricTag } from "../../../../../src/scripts/popularityMetricLfc/perfecter/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("perfectMetric", (): void => {
    const options = { metricTag: "1/16" as MetricTag }

    it(
        "takes a best metric and then converts it back into a scope in order to perfect it recursively",
        async (): Promise<void> => {
            const metric = {
                sumOfSquares: 0.009939068479730896 as SumOfSquares,
                name: "" as MetricName,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
                        [ Parameter.K_AS_COEFFICIENT ]: 0.8,
                    },
                ] as Combination<Submetric>,
            }

            spyOn(recursiveBestMetric, "recursiveSearchScopeAndMaybeUpdateBestMetric")

            await perfectMetric(metric, options)

            const expectedScope: Scope = [
                {},
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.K_AS_COEFFICIENT ]: {
                        center: 0.8 as ParameterValue,
                        window: 0.1 as Window<ParameterValue>,
                        ed: 3 as Ed<ParameterValue>,
                    },
                },
            ] as Combination<SubmetricScope>

            expect(recursiveBestMetric.recursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
                expectedScope,
                options,
            )
        },
    )

    it("when the metric had some spread parameters, it recreates them that way", async (): Promise<void> => {
        const metric = {
            sumOfSquares: 0.009939068479730896 as SumOfSquares,
            name: "" as MetricName,
            submetrics: [
                {
                    [ Parameter.COUNT ]: true,
                    [ Parameter.K_AS_COEFFICIENT ]: 0.8,
                },
                {
                    [ Parameter.SUM ]: true,
                    [ Parameter.K_AS_COEFFICIENT ]: 0.8,
                },
            ] as Combination<Submetric>,
            spreadDynamicParameters: [Parameter.K_AS_COEFFICIENT],
        }

        spyOn(recursiveBestMetric, "recursiveSearchScopeAndMaybeUpdateBestMetric")

        await perfectMetric(metric, options)

        const expectedScope: Scope = [
            {
                [ Parameter.K_AS_COEFFICIENT ]: {
                    center: 0.8 as ParameterValue,
                    window: 0.1 as Window<ParameterValue>,
                    ed: 3 as Ed<ParameterValue>,
                },
            },
            {
                [ Parameter.COUNT ]: true,
            },
            {
                [ Parameter.SUM ]: true,
            },
        ] as Combination<SubmetricScope>

        expect(recursiveBestMetric.recursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
            expectedScope,
            options,
        )
    })
})
