import { Resolution, Span } from "../../../../../src/general"
import { Combination } from "../../../../../src/general/math"
import {
    MetricName,
    Scope,
    SubmetricScope,
    SumOfSquares,
} from "../../../../../src/scripts/lfc/bestMetric"
import { recursiveSearchScopeAndMaybeUpdateBestMetric } from "../../../../../src/scripts/lfc/perfecter"
import { perfectMetric } from "../../../../../src/scripts/lfc/perfecter/metric"
import * as recursiveBestMetric from "../../../../../src/scripts/lfc/perfecter/recursiveBestMetric"
import { MetricTag } from "../../../../../src/scripts/lfc/perfecter/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/lfc/sumOfSquares"

describe("perfectMetric", () => {
    const options = { metricTag: "1/16" as MetricTag }

    it("takes a best metric and then converts it back into a scope in order to perfect it recursively", async () => {
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
                    span: 0.1 as Span<ParameterValue>,
                    resolution: 3 as Resolution<ParameterValue>,
                },
            },
        ] as Combination<SubmetricScope>

        expect(recursiveBestMetric.recursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
            expectedScope,
            options,
        )
    })

    it("when the metric had some spread parameters, it recreates them that way", async () => {
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
                    span: 0.1 as Span<ParameterValue>,
                    resolution: 3 as Resolution<ParameterValue>,
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
