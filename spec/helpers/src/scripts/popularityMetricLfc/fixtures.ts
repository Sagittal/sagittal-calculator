import {Combination, Name} from "../../../../../src/general"
import {Metric} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {Submetric} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

const metricFixture: Metric = {
    name: "" as Name<Metric>,
    submetrics: [] as unknown[] as Combination<Submetric>,
}

export {
    metricFixture,
}
