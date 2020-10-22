import {Combination, Name} from "../../../../../src/general"
import {Metric} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {perfectMetrics} from "../../../../../src/scripts/popularityMetricLfc/perfecter"
import * as metric from "../../../../../src/scripts/popularityMetricLfc/perfecter/metric"
import {MetricTag} from "../../../../../src/scripts/popularityMetricLfc/perfecter/types"
import {Submetric} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("perfectMetrics", (): void => {
    it("perfects each metric", async (): Promise<void> => {
        const metrics = [
            {
                name: "someMetricName1" as Name<Metric>,
                submetrics: [
                    {},
                ] as Combination<Submetric>,
            },
            {
                name: "someMetricName2" as Name<Metric>,
                submetrics: [
                    {},
                ] as Combination<Submetric>,
            },
            {
                name: "someMetricName3" as Name<Metric>,
                submetrics: [
                    {},
                ] as Combination<Submetric>,
            },
        ]
        spyOn(metric, "perfectMetric")

        await perfectMetrics(metrics)

        expect(metric.perfectMetric).toHaveBeenCalledWith(metrics[0], {metricTag: "1/3" as MetricTag})
        expect(metric.perfectMetric).toHaveBeenCalledWith(metrics[1], {metricTag: "2/3" as MetricTag})
        expect(metric.perfectMetric).toHaveBeenCalledWith(metrics[2], {metricTag: "3/3" as MetricTag})
    })
})
