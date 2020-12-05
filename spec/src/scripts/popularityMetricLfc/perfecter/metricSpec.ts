import {Combination, Ed, Name, Parameter, Window} from "@sagittal/general"
import {Metric, Scope, SubmetricScope, SumOfSquares} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {recursiveSearchScopeAndMaybeUpdateBestMetric} from "../../../../../src/scripts/popularityMetricLfc/perfecter"
import {perfectMetric} from "../../../../../src/scripts/popularityMetricLfc/perfecter/metric"
import * as recursiveBestMetric from "../../../../../src/scripts/popularityMetricLfc/perfecter/perfectMetric"
import {MetricTag} from "../../../../../src/scripts/popularityMetricLfc/perfecter/types"
import {PopularityParameterId, Submetric} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("perfectMetric", (): void => {
    const options = {metricTag: "1/16" as MetricTag}

    it("takes a best metric and then converts it back into a scope in order to perfect it recursively                     ", async (): Promise<void> => {
        const metric = {
            sumOfSquares: 0.009939 as SumOfSquares,
            name: "" as Name<Metric>,
            submetrics: [
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.K_AS_COEFFICIENT]: 0.8,
                },
            ] as Combination<Submetric>,
        }

        spyOn(recursiveBestMetric, "recursiveSearchScopeAndMaybeUpdateBestMetric")

        await perfectMetric(metric, options)

        const expectedScope: Scope = [
            {},
            {
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.K_AS_COEFFICIENT]: {
                    center: 0.8 as Parameter,
                    window: 0.1 as Window<{of: Parameter}>,
                    ed: 3 as Ed<{of: Parameter}>,
                },
            },
        ] as Combination<SubmetricScope>

        expect(recursiveBestMetric.recursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
            expectedScope,
            options,
        )
    })

    it("when the metric had some spread parameters, it recreates them that way", async (): Promise<void> => {
        const metric = {
            sumOfSquares: 0.009939 as SumOfSquares,
            name: "" as Name<Metric>,
            submetrics: [
                {
                    [PopularityParameterId.COUNT]: true,
                    [PopularityParameterId.K_AS_COEFFICIENT]: 0.8,
                },
                {
                    [PopularityParameterId.SUM]: true,
                    [PopularityParameterId.K_AS_COEFFICIENT]: 0.8,
                },
            ] as Combination<Submetric>,
            spreadDynamicParameters: [PopularityParameterId.K_AS_COEFFICIENT],
        }

        spyOn(recursiveBestMetric, "recursiveSearchScopeAndMaybeUpdateBestMetric")

        await perfectMetric(metric, options)

        const expectedScope: Scope = [
            {
                [PopularityParameterId.K_AS_COEFFICIENT]: {
                    center: 0.8 as Parameter,
                    window: 0.1 as Window<{of: Parameter}>,
                    ed: 3 as Ed<{of: Parameter}>,
                },
            },
            {
                [PopularityParameterId.COUNT]: true,
            },
            {
                [PopularityParameterId.SUM]: true,
            },
        ] as Combination<SubmetricScope>

        expect(recursiveBestMetric.recursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
            expectedScope,
            options,
        )
    })
})
