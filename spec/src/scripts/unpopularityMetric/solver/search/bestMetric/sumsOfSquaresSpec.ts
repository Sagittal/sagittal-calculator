import { computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/sumsOfSquares"
import {
    Metric,
    SumsOfSquares,
} from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/types"
import { Sample } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/types"

describe("computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares", () => {
    it("runs without error", () => {
        const sumsOfSquares = [] as SumsOfSquares
        const samples = [] as Sample[]
        const previousBestMetric = {} as Metric
        const indentation = "" as string

        computePossiblyUpdatedBestMetricWhilePopulatingSumsOfSquares(sumsOfSquares, samples, previousBestMetric, indentation)
    })
})
