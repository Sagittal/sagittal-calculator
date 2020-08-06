import { perfectMetric } from "../../../../../../src/scripts/unpopularityMetric/solver/perfect/metric"
import { SumOfSquares } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import { Combination } from "../../../../../../src/general/math"
import { Submetric } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("perfectMetric", () => {
    it("takes a best metric and then converts it back into a scope in order to perfect it recursively", async () => {
        const metric = {
            sumOfSquares: 0.009498003227551665 as SumOfSquares,
            submetrics: [
                {
                    "sum": true,
                    "kAsCoefficient": 0.7777777777777778
                }
            ] as Combination<Submetric>
        }

        const result = await perfectMetric(metric)

        expect(result).toEqual({
            sumOfSquares: 0.009498003227551665 as SumOfSquares,
            submetrics: [
                {
                    "sum": true,
                    "kAsCoefficient": 0.7777777777777778
                }
            ] as Combination<Submetric>
        })
    })
})
